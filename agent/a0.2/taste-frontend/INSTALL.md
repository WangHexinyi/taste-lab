# Installation

Install the **whole `taste-frontend` folder**. Never split its internal files.

## Antigravity

### Workspace-only
Copy the whole folder to:

```text
<project-root>/.agents/skills/taste-frontend/
```

### Global
Copy the whole folder to:

```text
~/.gemini/config/skills/taste-frontend/
```

Start a fresh session after installation.

## Other Agent Skills-compatible clients
Copy or upload the exact same `taste-frontend/` folder to that client's Agent Skills location. No file in this package assumes Antigravity-specific hooks, agents, or configuration.

## Active invocation
Use plain language:

> Use the `taste-frontend` skill for this task.

or:

> 使用 `taste-frontend` skill 严格完成以下前端开发。

## Passive invocation test
Start a fresh session and do not mention the skill. Ask for a substantial frontend/UI/web build. A skills-compatible client should discover the skill from its `name` and `description` metadata and activate it when relevant.

## Health check
Ask the agent:

> Use the `taste-frontend` skill and run its bundled self-test. Do not modify my project. Report whether workflow and QA helpers are functioning.

The agent should run `scripts/self-test.mjs` itself when terminal access exists.
