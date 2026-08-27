# Contributing

Thanks for helping Taste Lab become a more reliable frontend decision tool.

## Before opening a change

- Use an Issue or Discussion to explain the concrete failure, request or design tension.
- Include the user brief, target surface, model or agent, and rendered evidence when possible.
- Separate a demonstrated failure from a personal preference. A new rule should change a repeatable decision, not merely memorialize one example.
- Choose one track: Prompt Lab (`archive/`) or Agent Lab (`agent/`). Explain when a change affects both.
- Do not rewrite an existing version under `archive/` or `agent/a0.x/`; those directories are immutable historical snapshots.

## Pull requests

1. Add a new version in the appropriate track rather than silently changing an accepted snapshot.
2. For Prompt Lab, add or update a demo only when it provides observable evidence for the new prompt.
3. For Agent Lab, include the complete readable source tree, its original installable bundle and a meaningful self-test.
4. Run `python scripts/validate_repo.py`.
5. Explain the before/after behavior and the trade-off introduced.
6. Keep third-party attribution and licensing intact.

For a formal release, add the accepted version to its track, update the gallery and changelog, then tag the release.

By contributing, you agree that your contribution may be distributed under the repository's MIT License.
