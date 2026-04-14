# File And Folder Conventions

Use this file to make the project shape predictable.

## Root-Level Files

Recommended root documents:

- `README.md` for the project overview.
- `SETUP.md` or `docs/SETUP.md` for installation and local development.
- `ARCHITECTURE.md` or `docs/ARCHITECTURE.md` for system design.
- `CHANGELOG.md` for user-visible changes.
- `CONTRIBUTING.md` for collaboration rules.
- `LICENSE` for legal reuse.

## Suggested Source Layout

Choose the layout that fits the project, then document it.

```text
src/          production source
tests/        automated tests
docs/         project documentation
scripts/      local automation
examples/     runnable examples or reference setups
config/       shared configuration
assets/       static assets
```

## Folder Ownership

Document ownership when a folder has special rules:

| Folder | Owner | Notes |
| --- | --- | --- |
| `[path]` | `[person/team]` | `[why it matters]` |

## Placement Rules

- Put reusable logic where it can be imported without side effects.
- Keep framework glue near framework boundaries.
- Keep domain logic separate from transport, UI, or persistence when practical.
- Keep generated artifacts out of source unless the project depends on them directly.

