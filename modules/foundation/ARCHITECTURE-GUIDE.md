# Architecture Guide

Use this guide to keep architecture decisions visible and reviewable.

## Architecture Goals

- **Primary quality goal:** `[maintainability / speed / reliability / portability / developer experience]`
- **Expected scale:** `[users, data, traffic, team size, complexity]`
- **Main constraints:** `[runtime, hosting, budget, compliance, integrations]`
- **Things we are intentionally not optimizing for yet:** `[list]`

## System Boundaries

Describe the major boundaries:

| Boundary | Responsibility | Should not know about |
| --- | --- | --- |
| `[module/service]` | `[job]` | `[forbidden dependency]` |

## Decision Heuristics

- Prefer a simple module boundary before a new service.
- Prefer explicit data flow over hidden global state.
- Prefer stable interfaces around unstable implementation details.
- Prefer local complexity over distributed complexity when the team is small.
- Avoid abstraction until two real use cases prove it is needed.

## Architecture Review Questions

- What problem does this structure solve now?
- What future change does it make easier?
- What future change does it make harder?
- Where will a new contributor look first?
- What decision should be recorded in the decision log?

## Related Files

- [`../memory/DECISION-LOG.template.md`](../memory/DECISION-LOG.template.md)
- [`../skills/architecture-review-skill.md`](../skills/architecture-review-skill.md)
- [`../philosophy/abstraction-principles.md`](../philosophy/abstraction-principles.md)

