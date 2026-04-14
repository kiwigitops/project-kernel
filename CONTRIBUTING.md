# Contributing To Project Kernel

Project Kernel grows best through practical, high-signal additions: sharper templates, new packs, stack-specific guidance, examples, and small automation that keeps drag-and-drop adoption simple.

## Contribution Principles

- Add files only when they have a clear job.
- Prefer concrete checklists, prompts, and examples over general advice.
- Keep modules independently useful.
- Keep packs understandable without reading the whole repo.
- Preserve the memory-first and documentation-first character of the system.
- Avoid tooling that makes copying folders harder.

## Good Contributions

- A new pack for a real use case, such as a CLI, library, docs-only repo, SaaS app, research prototype, or agency handoff.
- A stack-specific skill, such as React review, Node release, Python packaging, or API design.
- Better wording for templates that removes ambiguity.
- More complete examples of seeded projects.
- Validation script improvements that catch broken links or missing hubs.

## Pack Requirements

Every contributed pack should include:

- `README.md` explaining the use case.
- `START-HERE.md` with first actions.
- A short list of included modules.
- Practical guidance for what to fill in immediately.
- No generated clutter or project-specific secrets.

## Documentation Requirements

Every new document should answer:

- What is this for?
- When should someone read or update it?
- What output should it produce?
- Which related files matter?

## Pull Request Checklist

- [ ] The new or changed files have a clear purpose.
- [ ] Links are relative and valid.
- [ ] Markdown headings are consistent.
- [ ] The change works by copying folders without special setup.
- [ ] `node scripts/validate-structure.js` passes.
- [ ] Examples or docs were updated when behavior changed.

