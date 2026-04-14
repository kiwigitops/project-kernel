# Project Kernel Operating System

This is the control hub for Project Kernel. Start here when you want to understand how the modules, packs, examples, scripts, and documentation fit together.

## Read This First

1. [`README.md`](README.md) for the project pitch, quick start, and adoption paths.
2. [`docs/overview.md`](docs/overview.md) for the system model.
3. [`modules/README.md`](modules/README.md) for the reusable building blocks.
4. [`packs/README.md`](packs/README.md) for curated drag-and-drop combinations.
5. [`examples/README.md`](examples/README.md) for concrete usage scenarios.

## System Map

```text
Project Kernel
|-- Modules: reusable primitives
|   |-- foundation: rules, standards, architecture, quality
|   |-- docs: templates for project documentation
|   |-- memory: continuity and decision tracking
|   |-- skills: reusable operating procedures
|   |-- workflow: planning, build, review, release, maintenance
|   \-- philosophy: principles that shape the work
|-- Packs: curated module combinations
|-- Examples: concrete seeded-project patterns
\-- Scripts: optional helpers for copying and validation
```

## Adoption Layers

### Minimal

Use this when you need just enough structure to keep a new repo from drifting.

- [`packs/minimal-starter`](packs/minimal-starter)
- Best for prototypes, experiments, and small tools.

### Standard

Use this when the project needs documentation and continuity from the beginning.

- [`packs/documented-starter`](packs/documented-starter)
- Best for real apps, libraries, and durable solo projects.

### Full System

Use this when a project will outlive one session or one person.

- [`packs/solo-dev-os`](packs/solo-dev-os)
- [`packs/team-handoff-pack`](packs/team-handoff-pack)
- [`packs/ai-builder-pack`](packs/ai-builder-pack)
- Best for maintainable products, team work, open-source launches, and AI-assisted development.

## How Modules Interact

The modules are independent but stronger together:

- Foundation defines the rules.
- Docs explain the project to humans.
- Memory preserves context between sessions.
- Skills provide reusable ways to solve recurring work.
- Workflow turns good habits into repeatable loops.
- Philosophy keeps the system opinionated instead of mechanical.

## Recommended First Copy

If you only copy three folders, copy these:

```text
modules/foundation/
modules/docs/
modules/memory/
```

That gives a project rules layer, public-facing documentation, and private working continuity.

## Maintenance Rhythm

Use this rhythm inside projects seeded with Project Kernel:

- At project start: fill foundation, setup, goals, assumptions, and README.
- Before implementation: update current state and planning workflow.
- During implementation: write decisions when tradeoffs appear.
- Before merge or release: run the review skill and definition of done.
- After meaningful work: update session notes, known issues, and changelog.

## Extension Points

Project Kernel is designed to grow through:

- stack-specific packs
- domain-specific skills
- team policy modules
- release checklists
- AI assistant rule files
- examples that show the system in real repos
