#!/usr/bin/env python3
"""Zero-dependency structural validation for Taste Lab."""

from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath
from urllib.parse import unquote, urlparse
from zipfile import BadZipFile, ZipFile


ROOT = Path(__file__).resolve().parents[1]
REPOSITORY_URL = "https://github.com/WangHexinyi/taste-lab"
TRACK_URLS = {
    "prompt": f"{REPOSITORY_URL}/tree/main/prompt",
    "agent": f"{REPOSITORY_URL}/tree/main/agent",
}
PROMPT_ARCHIVES = {
    "v0.0": ROOT / "archive" / "v0.0" / "TasteSkill.md",
    "v0.1": ROOT / "archive" / "v0.1" / "TasteSkill--V10.2.md",
    "v0.2": ROOT / "archive" / "v0.2" / "OpenSkill.md",
    "v0.3": ROOT / "archive" / "v0.3" / "TASTE_SKILL_V3_SINGLE_FILE_TEST.md",
    "v0.4": ROOT / "archive" / "v0.4" / "TASTE_SKILL_V3.4_SINGLE_FILE_TEST.md",
    "v0.5": ROOT / "archive" / "v0.5" / "TASTE_SKILL_V4.1_LITE_SINGLE_FILE_TEST.md",
    "v0.6": ROOT / "archive" / "v0.6" / "taste_frontend_v4_4_web_rules.md",
    "v0.7": ROOT / "archive" / "v0.7" / "TasteSkillAdaptive.md",
}
DEMO_COUNTS = {
    "v0.0": 1,
    "v0.1": 1,
    "v0.2": 3,
    "v0.3": 2,
    "v0.4": 1,
    "v0.5": 2,
    "v0.6": 2,
    "v0.7": 2,
}
PREVIEW_COUNTS = {
    "v0.1": 1,
    "v0.2": 3,
    "v0.3": 2,
    "v0.4": 1,
    "v0.5": 2,
    "v0.6": 2,
    "v0.7": 2,
}
AGENT_VERSIONS = {
    "a0.1": (
        ROOT / "agent" / "a0.1" / "taste-frontend",
        ROOT / "agent" / "downloads" / "taste_frontend_A0.1_portable_bundle.zip",
        "4.2-portable",
    ),
    "a0.2": (
        ROOT / "agent" / "a0.2" / "taste-frontend",
        ROOT / "agent" / "downloads" / "taste_frontend_A0.2_spatial_experiment_bundle.zip",
        "4.3-spatial-experiment",
    ),
    "a0.3": (
        ROOT / "agent" / "a0.3" / "taste-frontend",
        ROOT / "agent" / "downloads" / "taste_frontend_A0.3_bundle.zip",
        "4.4-composition-motion-experiment",
    ),
}
SECRET_PATTERNS = (
    re.compile(r"gh[pousr]_[A-Za-z0-9]{20,}"),
    re.compile(r"sk-[A-Za-z0-9]{20,}"),
)


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.in_title = False
        self.title_parts: list[str] = []
        self.hrefs: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() == "title":
            self.in_title = True
        if tag.lower() == "a":
            for key, value in attrs:
                if key.lower() == "href" and value:
                    self.hrefs.append(value)

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() == "title":
            self.in_title = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)

    @property
    def title(self) -> str:
        return "".join(self.title_parts).strip()


def validate_prompt_archives_and_demos(errors: list[str]) -> None:
    for version, path in PROMPT_ARCHIVES.items():
        if not path.is_file() or path.stat().st_size == 0:
            errors.append(f"missing prompt archive for {version}: {path.relative_to(ROOT)}")

    for version, expected in DEMO_COUNTS.items():
        directory = ROOT / "docs" / "demos" / version
        files = sorted(directory.glob("*.html")) if directory.is_dir() else []
        if len(files) != expected:
            errors.append(f"{version} expected {expected} HTML page(s), found {len(files)}")
        for path in files:
            parser = PageParser()
            try:
                parser.feed(path.read_text(encoding="utf-8"))
            except (OSError, UnicodeError) as exc:
                errors.append(f"cannot parse {path.relative_to(ROOT)}: {exc}")
                continue
            if not parser.title:
                errors.append(f"missing HTML title: {path.relative_to(ROOT)}")


def validate_previews(errors: list[str]) -> None:
    for version, expected in PREVIEW_COUNTS.items():
        directory = ROOT / "docs" / "previews" / version
        static_files = sorted(directory.glob("*.jpg")) if directory.is_dir() else []
        animated_files = sorted(directory.glob("*.webp")) if directory.is_dir() else []
        if len(static_files) != expected:
            errors.append(f"{version} expected {expected} static preview(s), found {len(static_files)}")
        if len(animated_files) != expected:
            errors.append(f"{version} expected {expected} animated preview(s), found {len(animated_files)}")
        for path in static_files:
            if path.stat().st_size < 10_000:
                errors.append(f"static preview is unexpectedly small: {path.relative_to(ROOT)}")
        for path in animated_files:
            if path.stat().st_size < 100_000:
                errors.append(f"animated preview is unexpectedly small: {path.relative_to(ROOT)}")
            if path.stat().st_size >= 10_000_000:
                errors.append(f"animated preview exceeds the GitHub inline-media budget: {path.relative_to(ROOT)}")


def validate_agent_versions(errors: list[str]) -> None:
    for version, (folder, bundle, package_version) in AGENT_VERSIONS.items():
        skill = folder / "SKILL.md"
        if not skill.is_file():
            errors.append(f"missing Agent Skill entrypoint for {version}: {skill.relative_to(ROOT)}")
            continue
        text = skill.read_text(encoding="utf-8")
        if not re.search(r"^name:\s*taste-frontend\s*$", text, re.MULTILINE):
            errors.append(f"{version} Agent Skill name must be taste-frontend")
        version_pattern = rf'^\s*version:\s*["\']?{re.escape(package_version)}["\']?\s*$'
        if not re.search(version_pattern, text, re.MULTILINE):
            errors.append(f"{version} Agent Skill metadata version must be {package_version}")
        if not bundle.is_file():
            errors.append(f"missing original Agent bundle for {version}: {bundle.relative_to(ROOT)}")
            continue

        try:
            with ZipFile(bundle) as archive:
                zipped: dict[str, bytes] = {}
                for info in archive.infolist():
                    if info.is_dir():
                        continue
                    entry = PurePosixPath(info.filename)
                    if not entry.parts or entry.parts[0] != "taste-frontend" or ".." in entry.parts:
                        errors.append(f"unsafe or unexpected ZIP entry in {bundle.name}: {info.filename}")
                        continue
                    relative = PurePosixPath(*entry.parts[1:]).as_posix()
                    zipped[relative] = archive.read(info)
        except BadZipFile as exc:
            errors.append(f"invalid Agent bundle {bundle.relative_to(ROOT)}: {exc}")
            continue

        extracted = {
            path.relative_to(folder).as_posix(): path.read_bytes()
            for path in folder.rglob("*")
            if path.is_file()
        }
        if zipped.keys() != extracted.keys():
            errors.append(f"expanded source file list does not match {bundle.name}")
            continue
        for relative, payload in zipped.items():
            if payload != extracted[relative]:
                errors.append(f"expanded source differs from {bundle.name}: {relative}")


def validate_gallery_links(errors: list[str]) -> None:
    index = ROOT / "docs" / "index.html"
    parser = PageParser()
    parser.feed(index.read_text(encoding="utf-8"))
    for href in parser.hrefs:
        parsed = urlparse(href)
        if parsed.scheme or parsed.netloc or href.startswith(("#", "mailto:")):
            continue
        local = unquote(parsed.path)
        target = (index.parent / local).resolve()
        if local.endswith("/"):
            target = target / "index.html"
        if not target.exists():
            errors.append(f"broken local gallery link: {href}")


def validate_track_readmes(errors: list[str]) -> None:
    landing_readme = ROOT / "README.md"
    landing = landing_readme.read_text(encoding="utf-8")
    prompt_readme = ROOT / "prompt" / "README.md"
    agent_readme = ROOT / "agent" / "README.md"

    for track, target in (("prompt", prompt_readme), ("agent", agent_readme)):
        href = TRACK_URLS[track]
        if f'href="{href}"' not in landing:
            errors.append(f"repository landing page must link to canonical {track} page URL")
        if not target.is_file():
            errors.append(f"missing independent track page: {target.relative_to(ROOT)}")

    if 'href="#prompt-lab' in landing or 'href="#agent-lab' in landing:
        errors.append("repository landing page must not use same-page track anchors")
    if "## Prompt Lab" in landing or "## Agent Lab" in landing:
        errors.append("repository landing page must not inline either track's long content")
    if not prompt_readme.is_file() or not agent_readme.is_file():
        return

    prompt_text = prompt_readme.read_text(encoding="utf-8")
    agent_text = agent_readme.read_text(encoding="utf-8")
    if "## Agent Lab" in prompt_text:
        errors.append("Prompt Lab page must not inline Agent Lab content")
    if "## Prompt Lab" in agent_text:
        errors.append("Agent Lab page must not inline Prompt Lab content")

    for readme, text, other_track in (
        (prompt_readme, prompt_text, "agent"),
        (agent_readme, agent_text, "prompt"),
    ):
        for required_url in (REPOSITORY_URL, TRACK_URLS[other_track]):
            if f'href="{required_url}"' not in text:
                errors.append(
                    f"track navigation must use canonical URL in {readme.relative_to(ROOT)}: "
                    f"{required_url}"
                )
        if 'href="../"' in text:
            errors.append(f"track home link must not resolve through /blob/main: {readme.relative_to(ROOT)}")

    gallery_text = (ROOT / "docs" / "index.html").read_text(encoding="utf-8")
    for public_path, public_text in (
        (agent_readme, agent_text),
        (ROOT / "docs" / "index.html", gallery_text),
    ):
        for product_specific_text in ("Antigravity", ".agent/skill"):
            if product_specific_text in public_text:
                errors.append(
                    f"public Agent guidance must remain host-neutral: "
                    f"{public_path.relative_to(ROOT)} contains {product_specific_text}"
                )

    for readme, text in (
        (landing_readme, landing),
        (prompt_readme, prompt_text),
        (agent_readme, agent_text),
    ):
        refs = re.findall(r'\[[^\]]*\]\(([^)]+)\)', text)
        refs += re.findall(r'(?:href|src)="([^"]+)"', text)
        for ref in refs:
            parsed = urlparse(ref)
            if parsed.scheme or parsed.netloc or ref.startswith(("#", "mailto:")):
                continue
            target = (readme.parent / unquote(parsed.path)).resolve()
            try:
                target.relative_to(ROOT)
            except ValueError:
                errors.append(f"track README link escapes repository: {readme.relative_to(ROOT)} -> {ref}")
                continue
            if not target.exists():
                errors.append(f"broken track README link: {readme.relative_to(ROOT)} -> {ref}")

    refs = re.findall(r'src="(\.\./docs/previews/[^"]+\.webp)"', prompt_text)
    expected = sum(PREVIEW_COUNTS.values())
    if len(refs) != expected or len(set(refs)) != expected:
        errors.append(
            f"Prompt Lab page must embed {expected} unique animated previews, "
            f"found {len(set(refs))}"
        )
    for ref in refs:
        if not (prompt_readme.parent / ref).is_file():
            errors.append(f"Prompt Lab page references a missing animated preview: {ref}")


def validate_secrets(errors: list[str]) -> None:
    suffixes = {".md", ".html", ".yml", ".yaml", ".py", ".js", ".mjs", ".json", ".txt"}
    for path in ROOT.rglob("*"):
        if not path.is_file() or ".git" in path.parts or path.suffix.lower() not in suffixes:
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        for pattern in SECRET_PATTERNS:
            if pattern.search(text):
                errors.append(f"possible credential in {path.relative_to(ROOT)}")


def main() -> int:
    errors: list[str] = []
    validate_prompt_archives_and_demos(errors)
    validate_previews(errors)
    validate_agent_versions(errors)
    validate_gallery_links(errors)
    validate_track_readmes(errors)
    validate_secrets(errors)
    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 1
    print(
        "Taste Lab validation passed: 8 prompt archives, 14 prompt-track pages, "
        "13 static and animated previews, 3 byte-matched Agent bundles, links and secret scan."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
