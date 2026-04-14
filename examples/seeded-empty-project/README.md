# Seeded Empty Project

## Starting Situation

```text
new-project/
\-- README.md
```

The project exists, but it has no standards, setup guide, architecture notes, memory, or workflow.

## Use

```bash
node scripts/install-pack.js packs/documented-starter ../new-project
```

## Result

```text
new-project/
|-- foundation/
|   |-- START-HERE.md
|   |-- PROJECT-RULES.md
|   |-- CODE-STANDARDS.md
|   |-- SETUP-CHECKLIST.md
|   \-- DEFINITION-OF-DONE.md
|-- docs/
|   |-- README.template.md
|   |-- SETUP.template.md
|   |-- ARCHITECTURE.template.md
|   |-- ROADMAP.template.md
|   \-- CONTRIBUTING.template.md
|-- workflow/
|   |-- planning-workflow.md
|   |-- implementation-workflow.md
|   \-- review-workflow.md
\-- README.md
```

## First Actions

1. Fill project purpose in `foundation/PROJECT-RULES.md`.
2. Fill commands in `foundation/SETUP-CHECKLIST.md`.
3. Convert `docs/README.template.md` into the project README.
4. Add initial architecture notes.
5. Add a short roadmap.

## What Improves

- New contributors know where to start.
- Setup becomes reproducible.
- Architecture decisions have a home.
- Review uses a visible definition of done.
