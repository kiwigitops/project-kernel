# Documented Starter Pack

Use this pack when a project should be understandable from the first commit.

## Best For

- Libraries.
- Apps with collaborators.
- Client work.
- Internal tools that people will revisit later.

## Included Modules

- `foundation`
- `docs`
- `workflow`

## What It Gives You

- Project standards.
- README, setup, architecture, roadmap, changelog, decisions, FAQ, and contribution templates.
- Documentation workflow and review flow.

## First Five Minutes

1. Fill project purpose in `foundation/PROJECT-RULES.md`.
2. Turn `docs/README.template.md` into your real README.
3. Fill local commands in `docs/SETUP.template.md`.
4. Add the current roadmap slice.
5. Use `workflow/documentation-workflow.md` whenever behavior changes.

## Install

```bash
node scripts/install-pack.js packs/documented-starter ../target-project
```

