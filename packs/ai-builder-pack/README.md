# AI Builder Pack

Use this pack when AI-assisted coding is part of the development workflow and the project needs durable context.

## Best For

- AI coding workflows.
- Vibe coding workflow sessions that need stronger review.
- Solo builders using assistants across multiple sessions.
- Teams that want generated work to follow project standards.

## Included Modules

- `foundation`
- `memory`
- `skills`
- `workflow`
- `philosophy`
- selected AI workflow extras.

## What It Gives You

- Project rules and quality bar for assistants to follow.
- Memory files for current state, decisions, assumptions, known issues, and session notes.
- Skills for AI collaboration, review, debugging, testing, and refactoring.
- Workflows for planning, implementation, review, and maintenance.
- Prompt context primitives.

## First Five Minutes

1. Fill `memory/PROJECT-CONTEXT.template.md`.
2. Fill `memory/CURRENT-STATE.template.md`.
3. Copy the prompt context from `extras/ASSISTANT-CONTEXT.md` into your assistant instructions when useful.
4. Use `skills/ai-collaboration-skill.md` before implementation.
5. Use `skills/code-review-skill.md` before accepting generated changes.

## Install

```bash
node scripts/install-pack.js packs/ai-builder-pack ../target-project
```

