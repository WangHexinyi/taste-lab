# Taste Frontend — Portable Agent Skill

This folder is intentionally **vendor-neutral**. It follows the open Agent Skills format:

```text
taste-frontend/
├── SKILL.md
├── scripts/
├── references/
├── examples/
└── README.md
```

Do not split the folder. Install/copy the **whole `taste-frontend` folder** into your agent client's skills directory.

## Invocation

### Passive / automatic
Skills-compatible agents discover the skill from `SKILL.md` metadata. The description is intentionally broad enough to match substantial frontend/UI/web-design work while excluding backend-only tasks.

### Active / explicit
The portable invocation is plain language:

> Use the `taste-frontend` skill for this task.

or in Chinese:

> 使用 `taste-frontend` skill 严格完成以下前端开发。

This works without depending on a vendor-specific slash-command syntax. Some clients may additionally expose `/taste-frontend`, `$taste-frontend`, or a skill picker; those are client conveniences, not required by this package.

## Scripts

The scripts are designed to be called by the agent when terminal execution exists:

- `scripts/taste-flow.mjs` — workflow state and gates.
- `scripts/taste-check.mjs` — mechanical browser/static delivery QA.
- `scripts/self-test.mjs` — installation health check.

They use no npm packages. Node.js 20+ is recommended. Full browser QA needs Chrome, Edge, or Chromium.

The human does **not** need to run these during normal agent work. The `SKILL.md` tells the agent when to run them.

## Self-test

After installing the whole folder, ask the agent:

> Use the `taste-frontend` skill and run its bundled self-test. Do not modify my project. Report only whether the skill, workflow helper, and QA helper are functioning.

The agent should execute the bundled `scripts/self-test.mjs` itself.

Expected result:

```text
Taste Frontend portable skill self-test
Flow init:   PASS
Good sample: PASS or PARTIAL
Bad sample:  FAIL
RESULT: PASS
```

`PARTIAL` means browser automation was unavailable/restricted but static QA still worked.

## Compatibility boundary

The folder is portable across **Agent Skills-compatible** clients. No package can force automatic discovery in a client that does not implement Agent Skills or equivalent skill loading. In that case, `SKILL.md` can still be supplied manually, but automatic activation and bundled-script execution depend on the host agent's capabilities.
