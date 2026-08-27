# Taste Frontend V4.4 — Composition & Motion Experiment

This build keeps the successful V4.3 spatial-media policy and tests the next quality bottleneck: category fit, full-page composition rhythm, motion continuity, and recurring AI visual archetypes.

Primary changes:
- category promise before adjective literalism;
- anti-AI archetype firewall without banning valid styles;
- composition rhythm across scale, density, alignment, media ratio, container behavior, and section topology;
- motion grammar separating ambient, object, state, narrative, and transition motion;
- stable 3D-neutral, opportunity-aware spatial-media policy;
- QA geometry fixes and automatic QA-state synchronization;
- compact benchmark handoff helper.

See `EXPERIMENT.md`, `references/composition-motion.md`, and `references/spatial-media.md`.

---

# Portable Agent Skill

This folder is intentionally **vendor-neutral** and follows the Agent Skills folder pattern:

```text
taste-frontend/
├── SKILL.md
├── scripts/
├── references/
├── examples/
└── README.md
```

Do not split the folder. Install/copy the **whole `taste-frontend` folder** into the host agent client's skills directory.

## Invocation

### Passive / automatic
Skills-compatible agents discover the skill from `SKILL.md` metadata and can activate it for substantial frontend/UI/web-design work.

### Active / explicit
Use plain language:

> Use the `taste-frontend` skill for this task.

or:

> 使用 `taste-frontend` skill 严格完成以下前端开发。

Host-specific slash commands or pickers are optional conveniences, not part of this portable package.

## Bundled scripts

The agent should call these itself when terminal execution exists:

- `scripts/taste-flow.mjs` — workflow state, gates, and QA-state synchronization.
- `scripts/taste-check.mjs` — mechanical browser/static delivery QA.
- `scripts/taste-handoff.mjs` — compact benchmark/review return package.
- `scripts/self-test.mjs` — installation health check.

They require no npm packages. Node.js 20+ is recommended. Full browser QA needs Chrome, Edge, or Chromium.

Run commands from the **user project root** while resolving `<skill-root>` to this installed folder. This ensures `.taste/` is created in the project, not inside the Skill installation.

## Self-test

After installation, ask the agent:

> Use the `taste-frontend` skill and run its bundled self-test. Do not modify my project. Report only whether the skill, workflow helper, QA helper, and handoff helper are functioning.

Expected shape:

```text
Taste Frontend portable skill self-test
Flow init:   PASS
QA sync:     PASS
Handoff:     PASS
Good sample: PASS / WARN / PARTIAL
Bad sample:  FAIL
RESULT: PASS
```

`PARTIAL` normally means browser automation is restricted but static QA still works.

## Compatibility boundary

The folder is portable across Agent Skills-compatible clients. No package can force automatic discovery in a host that does not implement Skills or equivalent loading. In those clients, use the expanded web fallback Markdown instead.
