# Project Kernel

**Project Kernel is a drag-and-drop project operating system for developers: reusable folder packs that seed new repos with structure, documentation, memory, workflow guidance, skills, and engineering standards.**

Use it when a blank project should not start blank. Drop in a prepared module or pack, fill the guided placeholders, and begin with a coherent foundation instead of improvising README files, rules, decisions, and workflows later.

Project Kernel is for solo builders, teams, open-source maintainers, AI-assisted coding workflows, and anyone who wants a reusable developer starter kit that is more durable than an ordinary project template system.

## Fast Drag-And-Drop Example

```text
new-app/
|-- src/
|-- package.json
\-- ...

Drag in:

project-kernel/modules/foundation/
project-kernel/modules/docs/
project-kernel/modules/memory/

Result:

new-app/
|-- foundation/
|   |-- START-HERE.md
|   |-- PROJECT-RULES.md
|   \-- DEFINITION-OF-DONE.md
|-- docs/
|   |-- README.template.md
|   |-- ARCHITECTURE.template.md
|   \-- ROADMAP.template.md
|-- memory/
|   |-- PROJECT-CONTEXT.template.md
|   |-- CURRENT-STATE.template.md
|   \-- SESSION-NOTES.template.md
|-- src/
\-- package.json
```

Need a curated path instead of individual modules?

```bash
node scripts/install-pack.js packs/solo-dev-os ../my-new-project
```

## Quick Start

1. Open [`PROJECT-OPERATING-SYSTEM.md`](PROJECT-OPERATING-SYSTEM.md) to understand the system map.
2. Choose one adoption layer:
   - **Minimal:** copy [`packs/minimal-starter`](packs/minimal-starter)
   - **Standard:** copy [`packs/documented-starter`](packs/documented-starter)
   - **Full system:** copy [`packs/solo-dev-os`](packs/solo-dev-os) or [`packs/ai-builder-pack`](packs/ai-builder-pack)
3. For manual drag-and-drop, copy the module folders named by the pack. For a composed pack install, run `node scripts/install-pack.js <pack> <target>`.
4. Fill the top-level `START-HERE.md` files first.
5. Update the memory files after each meaningful session so the project retains intent.

## What This Project Is

Project Kernel is a modular repo seeding system. It combines a developer starter kit, README template library, documentation toolkit, project memory system, reusable project foundations, engineering starter pack, and workflow guide into a set of folders you can copy into any repo.

It is not a code generator that owns your project. It is a practical layer of project intelligence that you can drop into an app, library, CLI, docs-only repo, experimental prototype, open-source launch, or AI coding workflow.

## Why It Exists

Most projects do not fail because the first commit lacked clever tooling. They fail because context leaks away:

- The README never explains how the project works.
- Decisions live in chat threads and disappear.
- Standards are implied instead of written down.
- Future maintainers cannot tell what matters.
- AI assistants repeat work because memory is not preserved.
- Teams inherit repos with unclear architecture and no operating rhythm.

Project Kernel gives that missing context a home from day one.

## Why It Is Different From Ordinary Templates

Typical project scaffolding creates files. Project Kernel creates a working environment.

- **Modular:** use one module, a curated pack, or the full system.
- **Tactile:** drag folders into a repo without learning a framework.
- **Memory-first:** preserve goals, decisions, assumptions, state, issues, and session notes.
- **Workflow-aware:** plan, build, review, release, and maintain with consistent loops.
- **AI-friendly:** includes prompt/rule primitives and continuity files that help assistants work from real context.
- **Extensible:** build new packs from the same module architecture.

## How Drag-And-Drop Seeding Works

Each module is self-contained and useful on its own:

```text
modules/
|-- foundation/    project rules, standards, setup, quality bar
|-- docs/          README, architecture, roadmap, changelog, contributing templates
|-- memory/        context, state, decisions, assumptions, known issues, session notes
|-- skills/        reusable debugging, review, refactor, testing, release playbooks
|-- workflow/      planning, implementation, review, documentation, triage, maintenance
\-- philosophy/    principles for clarity, continuity, abstraction, and long-term health
```

Packs combine modules for common use cases:

```text
packs/
|-- minimal-starter/
|-- documented-starter/
|-- solo-dev-os/
|-- team-handoff-pack/
|-- open-source-launch-pack/
\-- ai-builder-pack/
```

You can copy a module directly, follow a pack's module list, or use the lightweight installer script to compose a pack into a target project.

## Available Module Packs

| Pack | Use it when | Includes |
| --- | --- | --- |
| [`minimal-starter`](packs/minimal-starter) | You want the smallest serious foundation. | Foundation hub, project rules, setup checklist, definition of done |
| [`documented-starter`](packs/documented-starter) | You want strong docs from the first commit. | Foundation, docs templates, documentation workflow |
| [`solo-dev-os`](packs/solo-dev-os) | You want continuity across long-running solo work. | Foundation, docs, memory, workflow, philosophy |
| [`team-handoff-pack`](packs/team-handoff-pack) | You need to onboard or transfer ownership fast. | Docs, memory, decisions, current state, review workflow |
| [`open-source-launch-pack`](packs/open-source-launch-pack) | You are preparing a public repo. | README, contributing, roadmap, changelog, issue triage, release guidance |
| [`ai-builder-pack`](packs/ai-builder-pack) | You use AI-assisted coding or vibe coding workflow patterns. | Memory, skills, prompts, implementation standards, review loops |

## Example Project Setups

### Solo Developer Starting A New App

Start with [`packs/solo-dev-os`](packs/solo-dev-os). Fill in project goals, current state, setup, roadmap, implementation flow, and known issues. The result is a repo that remembers what you were building even after a week away.

### Open-Source Repo Launch

Start with [`packs/open-source-launch-pack`](packs/open-source-launch-pack). It gives you README structure, contribution expectations, changelog discipline, roadmap framing, and release readiness checks.

### AI-Assisted Coding Workflow

Start with [`packs/ai-builder-pack`](packs/ai-builder-pack). Keep the memory files current, point assistants at the foundation and skills files, and use the review skill before accepting generated changes.

### Team Handoff Setup

Start with [`packs/team-handoff-pack`](packs/team-handoff-pack). It is built for explaining architecture, current state, open questions, decisions, constraints, and maintenance routines.

More examples live in [`examples/`](examples).

## Folder Structure

```text
/
|-- PROJECT-OPERATING-SYSTEM.md
|-- docs/
|-- modules/
|   |-- foundation/
|   |-- docs/
|   |-- memory/
|   |-- skills/
|   |-- workflow/
|   \-- philosophy/
|-- packs/
|-- scripts/
\-- examples/
```

## How To Customize It

1. Copy the closest module or pack into your target project.
2. Rename folders if your repo already uses another convention.
3. Replace bracketed placeholders like `[project name]`.
4. Delete guidance that does not apply after you have captured the decision.
5. Add stack-specific rules only after they are real enough to maintain.

See [`docs/customization.md`](docs/customization.md) for deeper guidance.

## How To Build Your Own Packs

A pack is a curated folder with a `README.md`, a `START-HERE.md`, a `pack.json` manifest, and optional extras.

Good packs answer three questions:

- Who is this for?
- What should they read first?
- Which decisions does this pack help them make earlier?

Use [`docs/pack-guide.md`](docs/pack-guide.md) and [`packs/README.md`](packs/README.md) to create community-friendly packs.

## Documentation Philosophy

Documentation should reduce future confusion, not decorate the repo. Project Kernel favors:

- decision records over vague status notes
- setup steps that a new contributor can actually run
- architecture notes that explain tradeoffs
- changelogs that help users understand impact
- memory files that preserve working context

## Workflow Philosophy

The workflow files are intentionally boring in the best way. Plan small, implement with context, review against the quality bar, document decisions while they are fresh, and keep maintenance visible.

## Automation

The system works by copying folders, but lightweight scripts are included:

```bash
node scripts/install-pack.js packs/ai-builder-pack ../target-project
node scripts/validate-structure.js
node scripts/generate-readme-index.js
```

These scripts avoid heavy project scaffolding. They copy packs, validate expected structure, and print module/pack indexes for README maintenance.

## Contributing

Contributions are welcome: new packs, sharper templates, stack-specific operating guides, better examples, and structure validation improvements all fit the project.

Before opening a PR, read [`CONTRIBUTING.md`](CONTRIBUTING.md), keep files high-signal, and make sure each added document has a clear job.

If Project Kernel helps you start better repos, star it, fork it, adapt it, and share your own packs. The best version of this project is a community library of practical project foundations.

## Roadmap

See [`ROADMAP.md`](ROADMAP.md) for planned improvements, including stack-specific packs, richer validation, decision-log tooling, project health reports, and starter packs for app, library, CLI, docs-only, and experimental repos.
