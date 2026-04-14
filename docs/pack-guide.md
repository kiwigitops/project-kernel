# Pack Guide

Packs are curated combinations of modules for a specific starting situation.

## Pack Anatomy

Every pack should include:

- `README.md` for use case and included modules.
- `START-HERE.md` for first actions.
- `pack.json` for automation.
- optional `extras/` for pack-specific files.

## Pack JSON

```json
{
  "name": "solo-dev-os",
  "description": "A continuity-first setup for durable solo projects.",
  "modules": ["foundation", "docs", "memory", "workflow", "philosophy"],
  "extras": ["extras"]
}
```

## How To Use A Pack

Manual:

1. Open the pack README.
2. Copy the listed modules from `modules/` into your target project.
3. Copy any pack `extras/` into the target project.
4. Fill the first-action checklist in `START-HERE.md`.

Scripted:

```bash
node scripts/install-pack.js packs/solo-dev-os ../target-project
```

## How To Build A New Pack

1. Choose a concrete use case.
2. Pick only the modules that directly support that use case.
3. Add pack-specific extras only when they are genuinely useful.
4. Write first actions that can be completed in five minutes.
5. Keep the pack small enough to understand at a glance.

## Good Pack Ideas

- TypeScript library starter.
- Python CLI starter.
- SaaS app foundation.
- Docs-only project.
- Research prototype.
- Client handoff pack.
- Security review pack.
- API product pack.

