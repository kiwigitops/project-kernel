# Naming Conventions

Good names reduce the amount of architecture people must hold in their heads.

## General Naming Rules

- Name things after their role in the system.
- Prefer specific names over broad containers like `utils`, `helpers`, or `misc`.
- Avoid abbreviations unless they are standard in the domain.
- Use consistent terms for the same concept across code, docs, issues, and UI.
- Rename when a name becomes misleading.

## File Names

Document the project convention here:

- Source files: `[kebab-case / camelCase / snake_case]`
- Test files: `[name.test.ext / name.spec.ext]`
- Documentation files: `[UPPERCASE.md / kebab-case.md]`
- Generated files: `[pattern]`

## Domain Vocabulary

| Term | Meaning | Avoid |
| --- | --- | --- |
| `[term]` | `[meaning]` | `[confusing synonym]` |

## Naming Review

Before merging a new concept, ask:

- Will a new contributor understand this name?
- Does this name match the docs?
- Does this name hide a side effect?
- Is this concept likely to grow into a better name later?

