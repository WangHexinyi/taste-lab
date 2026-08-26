#!/usr/bin/env python3
"""Zero-dependency structural validation for Taste Lab."""

from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse


ROOT = Path(__file__).resolve().parents[1]
CANONICAL = ROOT / "skills" / "design-taste-frontend" / "SKILL.md"
ARCHIVES = {
    "v0.0": ROOT / "archive" / "v0.0" / "TasteSkill.md",
    "v0.1": ROOT / "archive" / "v0.1" / "TasteSkill--V10.2.md",
    "v0.2": ROOT / "archive" / "v0.2" / "OpenSkill.md",
    "v0.3": ROOT / "archive" / "v0.3" / "TASTE_SKILL_V3_SINGLE_FILE_TEST.md",
    "v0.4": ROOT / "archive" / "v0.4" / "TASTE_SKILL_V3.4_SINGLE_FILE_TEST.md",
}
DEMO_COUNTS = {"v0.0": 1, "v0.1": 1, "v0.2": 3, "v0.3": 2, "v0.4": 1}
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


def validate_skill(errors: list[str]) -> None:
    if not CANONICAL.is_file():
        errors.append(f"missing canonical Skill: {CANONICAL.relative_to(ROOT)}")
        return
    text = CANONICAL.read_text(encoding="utf-8")
    lines = text.splitlines()
    if not lines or lines[0] != "---":
        errors.append("canonical SKILL.md must begin with YAML frontmatter")
        return
    try:
        end = lines.index("---", 1)
    except ValueError:
        errors.append("canonical SKILL.md has no closing frontmatter delimiter")
        return
    frontmatter = "\n".join(lines[1:end])
    if not re.search(r"^name:\s*design-taste-frontend\s*$", frontmatter, re.MULTILINE):
        errors.append("canonical Skill name must be design-taste-frontend")
    if not re.search(r"^description:\s*\S.+$", frontmatter, re.MULTILINE):
        errors.append("canonical Skill needs a non-empty description")
    if text != ARCHIVES["v0.4"].read_text(encoding="utf-8"):
        errors.append("canonical Skill must match the archived V0.4 snapshot")


def validate_archive_and_demos(errors: list[str]) -> None:
    for version, path in ARCHIVES.items():
        if not path.is_file() or path.stat().st_size == 0:
            errors.append(f"missing archive file for {version}: {path.relative_to(ROOT)}")
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


def validate_secrets(errors: list[str]) -> None:
    suffixes = {".md", ".html", ".yml", ".yaml", ".py", ".txt"}
    for path in ROOT.rglob("*"):
        if not path.is_file() or ".git" in path.parts or path.suffix.lower() not in suffixes:
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        for pattern in SECRET_PATTERNS:
            if pattern.search(text):
                errors.append(f"possible credential in {path.relative_to(ROOT)}")


def main() -> int:
    errors: list[str] = []
    validate_skill(errors)
    validate_archive_and_demos(errors)
    validate_gallery_links(errors)
    validate_secrets(errors)
    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 1
    print("Taste Lab validation passed: canonical Skill, 5 archives, 8 gallery pages, links and secret scan.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
