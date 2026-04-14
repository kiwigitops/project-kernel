# Sourced Skills

This index tracks Project Kernel skills adapted from public Claude skill implementations.

## What Was Integrated

| Project Kernel Skill | Primary Sources | Notes |
| --- | --- | --- |
| [`design-sprint`](design-sprint/SKILL.md) | Wondel.ai `design-sprint` | Five-day sprint process, exercises, prototype/test flow |
| [`ui-ux-system-generator`](ui-ux-system-generator/SKILL.md) | Wondel.ai `refactoring-ui`, Wondel.ai `top-design`, Claude CraftKit `ui-designer`, Tyr Chen `design-guide`, OilOil UI/UX Guide | Merged token generation, component system, responsive, extraction, and implementation patterns |
| [`ios-platform-design`](ios-platform-design/SKILL.md) | Wondel.ai `ios-hig-design`, Apple HIG | iOS layout, typography, semantic color, navigation, controls, accessibility |
| [`usability-audit`](usability-audit/SKILL.md) | Wondel.ai `ux-heuristics`, OilOil UI/UX Guide | Nielsen/Krug-style heuristics, severity ratings, task-first P0/P1/P2 audit structure |
| [`retention-hook-analysis`](retention-hook-analysis/SKILL.md) | Wondel.ai `hooked-ux`, Wondel.ai `improve-retention` | Hook Model, B=MAP, ability chain, habit testing, ethics |
| [`ui-refactor-visual-audit`](ui-refactor-visual-audit/SKILL.md) | Wondel.ai `refactoring-ui`, Wondel.ai `top-design`, OilOil UI/UX Guide, Claude CraftKit `ui-designer` | Visual audit and refactor workflow for hierarchy, spacing, tokens, states, and polish |

## Source Repositories

- Wondel.ai skills: https://github.com/wondelai/skills
- BehiSecc awesome Claude skills: https://github.com/BehiSecc/awesome-claude-skills
- OilOil UI/UX Guide: https://github.com/oil-oil/oiloil-ui-ux-guide
- Claude CraftKit UI skills: https://github.com/marcioaltoe/claude-craftkit
- Tyr Chen design guide skill: https://github.com/tyrchen/claude-skills/tree/main/design-guide
- Smithery skill listings: https://smithery.ai

## Normalization Rules

Each sourced skill was converted to:

```text
modules/skills/<skill-name>/
|-- SKILL.md
|-- checklist.md
\-- templates/
```

Every `SKILL.md` follows:

- Purpose
- When to Use
- Activation
- Inputs Required
- Process
- Output
- Checklist
- Common Mistakes
- Related Skills

## Integration Rules

- Sourced skills must work independently after copy/paste.
- Each skill must point to memory files for decisions, known issues, assumptions, or current state.
- Skills that produce project direction must update `memory/DECISION-LOG.template.md`.
- Skills that uncover risks must update `memory/KNOWN-ISSUES.template.md` or `memory/OPEN-QUESTIONS.template.md`.
- Skills that alter design systems must update `memory/DESIGN-REVIEW-NOTES.template.md`.

