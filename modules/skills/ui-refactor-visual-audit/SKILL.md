# UI Refactor Visual Audit

## Purpose

Audit and improve visual UI quality: hierarchy, spacing, typography, color, tokens, dark mode, depth, layout composition, component consistency, states, iconography, and implementation polish.

This skill is adapted from Wondel.ai's `refactoring-ui` and `top-design` skills, with additional review structure from OilOil's UI/UX guide and Smithery-discovered UI design/system skills.

## When to Use

Use this skill when:

- a UI "looks off",
- a page feels cluttered or amateur,
- visual hierarchy is weak,
- spacing and typography are inconsistent,
- Tailwind or CSS needs design refactoring,
- a component library has drift,
- dark mode is rough,
- design tokens are missing,
- or a launch needs visual polish.

Use `usability-audit` first if users cannot complete the task. Use this skill when the task works but the interface needs visual and implementation quality.

## Activation

Trigger this skill when the request mentions:

- visual audit,
- UI refactor,
- improve UI,
- looks bad,
- make it polished,
- visual hierarchy,
- spacing,
- typography,
- color palette,
- Tailwind styling,
- component styling,
- design tokens,
- dark mode,
- shadcn/ui,
- dashboard polish,
- or interface critique.

## Inputs Required

- Screenshot, URL, component code, design file, or CSS.
- Surface type and primary task.
- Brand or product constraints.
- Target platform and stack.
- Existing tokens or theme if any.
- Accessibility requirements.
- Desired output: critique only, refactor plan, code patch, or design spec.

## Process

1. Identify surface and intent.
   - Is this a task UI, dashboard, marketing page, portfolio, form, navigation, or component?
   - Do not apply expressive marketing rules to dense productivity workflows.

2. Score visual quality.
   - Rate hierarchy, spacing, typography, color, depth, composition, components, states, and accessibility.
   - Give a current score and the few changes most likely to improve it.

3. Audit hierarchy.
   - Identify the primary action and primary content.
   - De-emphasize secondary labels, metadata, helper text, and routine actions.
   - Use size, weight, and contrast deliberately.

4. Audit spacing and layout.
   - Use a constrained scale.
   - Keep related items close and separate groups generously.
   - Remove decorative wrappers that do not clarify grouping.
   - Constrain text and forms to readable widths.

5. Audit typography.
   - Use a clear scale and line-height system.
   - Avoid too many font families and weights.
   - Make headings tight and body text readable.
   - Check truncation and responsive behavior.

6. Audit color and tokens.
   - Design in grayscale first if hierarchy is weak.
   - Use semantic roles for text, surfaces, borders, feedback, and interaction.
   - Check contrast.
   - Avoid pure black/white harshness unless brand requires it.
   - Dark mode should remap tokens, not invert values blindly.

7. Audit depth, imagery, icons, and motion.
   - Use shadows and elevation sparingly.
   - Keep icon families consistent.
   - Treat images with stable aspect ratios and object-fit.
   - Motion should explain state or hierarchy and respect reduced-motion.

8. Audit component states.
   - Check hover, focus, active, disabled, loading, empty, error, success.
   - Missing states are product quality bugs, not optional polish.

9. Produce refactor plan.
   - Prioritize high-impact fixes.
   - Separate token changes, component changes, page layout changes, and copy changes.
   - If editing code, keep the patch scoped to visual quality and state coverage.

10. Preserve context.
   - Add unresolved visual system issues to `memory/DESIGN-REVIEW-NOTES.template.md`.
   - Add token/component decisions to `memory/DECISION-LOG.template.md`.
   - Add implementation constraints to `memory/IMPLEMENTATION-NOTES.template.md`.

## Output

Produce:

- visual quality score,
- prioritized issues,
- evidence,
- concrete fixes,
- token recommendations,
- component/state recommendations,
- accessibility notes,
- optional before/after code guidance,
- memory updates required.

## Checklist

Use [`checklist.md`](checklist.md) during review.

Minimum quality bar:

- [ ] Primary action is visually obvious.
- [ ] Spacing follows a scale.
- [ ] Typography hierarchy is readable.
- [ ] Color roles are semantic.
- [ ] Contrast passes.
- [ ] Components reuse consistent variants.
- [ ] Focus and state styles exist.
- [ ] Dark mode is checked if supported.
- [ ] Visual decisions are recorded when they affect the system.

## Common Mistakes

- Adding color before fixing hierarchy.
- Making every element bold, large, or high contrast.
- Using arbitrary spacing values.
- Centering dense content that should be scannable.
- Overusing cards, borders, and shadows.
- Mixing icon styles.
- Missing focus states.
- Treating dark mode as an afterthought.
- Fixing a single page while leaving tokens broken.
- Using visual hierarchy to hide pricing, terms, cancellation, or privacy controls.

## Related Skills

- [`../ui-ux-system-generator/SKILL.md`](../ui-ux-system-generator/SKILL.md)
- [`../usability-audit/SKILL.md`](../usability-audit/SKILL.md)
- [`../ios-platform-design/SKILL.md`](../ios-platform-design/SKILL.md)
- [`../../workflow/product-design-workflow.md`](../../workflow/product-design-workflow.md)
- [`../../memory/DESIGN-REVIEW-NOTES.template.md`](../../memory/DESIGN-REVIEW-NOTES.template.md)

## Source Attribution

Primary source patterns:

- Wondel.ai `refactoring-ui`, MIT: https://github.com/wondelai/skills/tree/main/refactoring-ui
- Wondel.ai hosted `refactoring-ui`: https://skills.wondel.ai/skills/refactoring-ui/
- Wondel.ai `top-design`, MIT: https://github.com/wondelai/skills/tree/main/top-design
- OilOil UI/UX Guide review mode, Apache-2.0: https://github.com/oil-oil/oiloil-ui-ux-guide/tree/main/skills/oiloil-ui-ux-guide
- Smithery `ui-designer`, backed by `marcioaltoe/claude-craftkit`, MIT: https://smithery.ai/skills/marcioaltoe/ui-designer
- Claude CraftKit `ui-designer`: https://github.com/marcioaltoe/claude-craftkit/tree/main/plugins/ui/skills/ui-designer

Curated and normalized for Project Kernel's modular skill format.

