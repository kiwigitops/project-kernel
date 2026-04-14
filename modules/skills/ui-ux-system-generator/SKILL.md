# UI/UX System Generator

## Purpose

Generate or extract a practical UI/UX system for a project: design tokens, component rules, responsive behavior, accessibility requirements, state coverage, and implementation-ready component specs.

This skill is not a blank design theory prompt. It is adapted from real Claude skill implementations: Wondel.ai's `refactoring-ui` and `top-design`, Smithery-listed `ui-designer` from `claude-craftkit`, Smithery-listed `design-guide`, and the Apache-licensed OilOil UI/UX guide.

## When to Use

Use this skill when:

- starting a UI-heavy app,
- creating a design system from scratch,
- extracting a design language from an existing product,
- implementing React/Tailwind/shadcn UI components,
- converting a visual direction into reusable tokens,
- documenting component states for engineering,
- or making a project visually consistent before feature growth.

Use `ui-refactor-visual-audit` when the UI already exists and needs critique. Use `usability-audit` when the main risk is task completion, confusion, or accessibility.

## Activation

Trigger this skill when the request mentions:

- design system,
- UI system,
- component library,
- design tokens,
- shadcn/ui,
- Tailwind,
- responsive layout,
- dark mode,
- visual language,
- extract design,
- design guide,
- component spec,
- or UI/UX system generator.

## Inputs Required

- Product type: app, dashboard, marketing site, content site, mobile app, admin tool, or component library.
- Primary user task.
- Brand or product personality.
- Existing UI references, screenshots, website URL, or codebase paths.
- Target stack and constraints.
- Required accessibility level, default WCAG AA.
- Supported breakpoints and platforms.
- Components needed now.

## Process

1. Classify the surface.
   - Identify whether the project is task-first app UI, dashboard, form flow, marketing page, portfolio, or native-style surface.
   - Pick the appropriate strictness: task-first clarity for workflows; expressive hierarchy for brand surfaces.

2. Extract or define design primitives.
   - Colors: primary, secondary, semantic, text, surface, border, focus.
   - Typography: font families, scale, weights, line heights, text styles.
   - Spacing: use a constrained 4px-based scale.
   - Radius, shadow, elevation, and motion tokens.
   - Dark mode token remapping, not one-off dark classes.

3. Build semantic tokens.
   - Separate primitive values from semantic roles.
   - Components must reference semantic roles like `color.text.primary`, `color.background.surface`, `color.feedback.danger`.
   - Avoid hardcoded hex values in component code unless they are being added as tokens.

4. Define component anatomy.
   - For each component, specify purpose, variants, states, accessibility, responsive behavior, and content rules.
   - Cover default, hover, focus, active, disabled, loading, empty, error, and success states where relevant.
   - Use native or established accessible primitives when possible.

5. Apply implementation constraints.
   - For React/Tailwind/shadcn projects, prefer composition, typed props, `cn()` class merging, semantic HTML, and Radix/shadcn primitives.
   - For extracted web design, capture colors, type, spacing, shadows, transitions, component patterns, interactive states, and screenshots at mobile/tablet/desktop.
   - For expressive web pages, make typography and composition intentional while preserving performance and reduced-motion support.

6. Validate the system.
   - Check contrast.
   - Check keyboard navigation and focus states.
   - Check mobile layout first.
   - Check dark mode and text expansion.
   - Check that component variants are few, purposeful, and reusable.

7. Preserve decisions.
   - Record major token, component, and platform decisions in `memory/DECISION-LOG.template.md`.
   - Add open design questions to `memory/OPEN-QUESTIONS.template.md`.
   - Add current UI system status to `memory/DESIGN-REVIEW-NOTES.template.md`.

## Output

Produce:

- design system brief,
- token inventory,
- component inventory,
- component specs,
- accessibility requirements,
- responsive behavior notes,
- dark mode rules,
- implementation guidance,
- memory updates required.

For extraction work, also produce:

- source URL or screenshot list,
- extracted colors and typography,
- spacing/radius/shadow scales,
- interaction and animation patterns,
- responsive observations,
- recreation notes.

## Checklist

Use [`checklist.md`](checklist.md) before accepting the system.

Minimum quality bar:

- [ ] Tokens separate primitive values from semantic usage.
- [ ] Component states are documented.
- [ ] Focus and keyboard behavior are specified.
- [ ] Color contrast meets WCAG AA.
- [ ] Mobile layout is designed first or explicitly supported.
- [ ] Dark mode is tokenized.
- [ ] Motion respects reduced-motion.
- [ ] Components have clear usage boundaries.
- [ ] Decisions are recorded in memory.

## Common Mistakes

- Starting with colors before hierarchy and spacing.
- Creating many variants before real use cases exist.
- Using hardcoded hex values throughout components.
- Treating dark mode as inverted light mode.
- Missing focus, disabled, loading, empty, and error states.
- Using icon-only controls without labels.
- Mixing component libraries or icon styles casually.
- Designing a marketing composition for a task-heavy workflow.
- Copying a visual reference without extracting the system underneath it.

## Related Skills

- [`../ui-refactor-visual-audit/SKILL.md`](../ui-refactor-visual-audit/SKILL.md)
- [`../usability-audit/SKILL.md`](../usability-audit/SKILL.md)
- [`../ios-platform-design/SKILL.md`](../ios-platform-design/SKILL.md)
- [`../../workflow/product-design-workflow.md`](../../workflow/product-design-workflow.md)
- [`../../memory/DESIGN-REVIEW-NOTES.template.md`](../../memory/DESIGN-REVIEW-NOTES.template.md)

## Source Attribution

Primary source patterns:

- Wondel.ai `refactoring-ui`, MIT: https://github.com/wondelai/skills/tree/main/refactoring-ui
- Wondel.ai `top-design`, MIT: https://github.com/wondelai/skills/tree/main/top-design
- Smithery `ui-designer`, backed by `marcioaltoe/claude-craftkit`, MIT: https://smithery.ai/skills/marcioaltoe/ui-designer
- Claude CraftKit `ui-designer`: https://github.com/marcioaltoe/claude-craftkit/tree/main/plugins/ui/skills/ui-designer
- Smithery `design-guide`, backed by `tyrchen/claude-skills`, MIT: https://smithery.ai/skills/tyrchen/design-guide
- Tyr Chen `design-guide`: https://github.com/tyrchen/claude-skills/tree/main/design-guide
- OilOil UI/UX Guide, Apache-2.0: https://github.com/oil-oil/oiloil-ui-ux-guide/tree/main/skills/oiloil-ui-ux-guide

Curated and normalized for Project Kernel's modular skill format.

