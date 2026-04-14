# Modules

Modules are the reusable primitives of Project Kernel. Each folder can be copied into a project on its own, and each includes a `START-HERE.md` file that explains how to use it.

## Available Modules

| Module | Purpose |
| --- | --- |
| [`foundation`](foundation/START-HERE.md) | Project rules, standards, architecture preferences, setup checklist, and definition of done |
| [`docs`](docs/START-HERE.md) | README, architecture, roadmap, changelog, setup, FAQ, and contributing templates |
| [`memory`](memory/START-HERE.md) | Context, current state, decisions, assumptions, priorities, issues, and session notes |
| [`skills`](skills/START-HERE.md) | Reusable operating procedures for debugging, review, testing, refactoring, shipping, and AI collaboration |
| [`workflow`](workflow/START-HERE.md) | Planning, implementation, review, release, triage, documentation, and maintenance loops |
| [`philosophy`](philosophy/START-HERE.md) | Principles for clarity, maintainability, continuity, abstraction, and product thinking |

## How To Use A Module

1. Copy the module folder into your project.
2. Open its `START-HERE.md`.
3. Fill in the most important placeholders first.
4. Link the module from your main project README.
5. Keep the files current as the project changes.

## Module Design Rules

- A module should be useful without the rest of Project Kernel.
- A module should tell the user what to read first.
- A module should produce decisions, standards, or working context.
- A module should avoid generic filler.
- A module should link to adjacent modules when they become useful.

