# Contributing

Thanks for helping Taste Lab become a more reliable frontend decision tool.

## Before opening a change

- Use an Issue or Discussion to explain the concrete failure, request or design tension.
- Include the user brief, target surface, model or agent, and rendered evidence when possible.
- Separate a demonstrated failure from a personal preference. A new rule should change a repeatable decision, not merely memorialize one example.
- Do not edit files under `archive/`; they are immutable historical snapshots.

## Pull requests

1. Modify the current Skill under `skills/design-taste-frontend/`.
2. Add or update a demo only when it provides observable evidence for the change.
3. Run `python scripts/validate_repo.py`.
4. Explain the before/after behavior and the trade-off introduced.
5. Keep third-party attribution and licensing intact.

For a formal release, copy the accepted current Skill into a new archive version, update the gallery and changelog, then tag the release.

By contributing, you agree that your contribution may be distributed under the repository's MIT License.
