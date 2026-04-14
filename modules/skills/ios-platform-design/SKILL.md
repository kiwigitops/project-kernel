# iOS Platform Design

## Purpose

Design or review iPhone and iPad interfaces against Apple's platform conventions: layout, safe areas, navigation, Dynamic Type, semantic color, native controls, gestures, SF Symbols, haptics, privacy, and accessibility.

This skill is adapted from Wondel.ai's `ios-hig-design` Claude skill, which is based on Apple's Human Interface Guidelines. The Project Kernel version adds output templates and memory integration for project seeding.

## When to Use

Use this skill when:

- designing an iOS or iPadOS app,
- reviewing SwiftUI or UIKit screens,
- choosing navigation patterns,
- checking HIG compliance,
- implementing Dynamic Type, VoiceOver, or dark mode,
- designing app icons, widgets, or system integrations,
- or replacing web patterns with native iOS alternatives.

## Activation

Trigger this skill when the request mentions:

- iPhone app,
- iPad app,
- SwiftUI,
- UIKit,
- iOS HIG,
- Human Interface Guidelines,
- safe area,
- Dynamic Island,
- tab bar,
- navigation stack,
- sheet,
- modal,
- SF Symbols,
- haptics,
- VoiceOver,
- Dynamic Type,
- or iOS accessibility.

## Inputs Required

- Target device classes: iPhone, iPad, both.
- App structure and primary tasks.
- Screens, screenshots, code, or wireframes.
- Navigation model.
- Typography approach.
- Color and dark mode approach.
- Accessibility requirements.
- Any platform integrations: widgets, share sheets, permissions, notifications, keyboard, camera, location.

## Process

1. Classify the surface.
   - Screen type: onboarding, list/detail, editor, settings, modal task, tab root, search, form, widget.
   - Platform: iPhone compact, iPad regular, universal.

2. Check layout and safe areas.
   - Respect notches, Dynamic Island, status bar, home indicator, and tab/navigation bars.
   - Keep interactive controls outside unsafe areas.
   - Use standard margins and enough hit area.
   - Test smallest supported screen first.

3. Check typography.
   - Prefer semantic text styles over hardcoded sizes.
   - Support Dynamic Type.
   - Keep mobile line lengths readable.
   - Do not disable scaling to preserve a layout.

4. Check color and depth.
   - Use semantic system colors where possible.
   - Support light and dark mode.
   - Use contrast that meets WCAG AA.
   - Use depth and material only when it clarifies hierarchy.

5. Check navigation.
   - Use tab bars for primary destinations.
   - Use navigation stacks for hierarchy.
   - Use sheets or modals for focused tasks.
   - Avoid hamburger navigation as a default iOS pattern.
   - Ensure every flow has an obvious exit.

6. Check controls and inputs.
   - Prefer native controls and system affordances.
   - Use correct keyboard types and content types.
   - Use destructive styling and confirmation for irreversible actions.
   - Keep primary actions thumb-reachable when appropriate.

7. Check accessibility.
   - Every interactive element needs a useful accessibility label.
   - Values and hints must be added when state or action is not obvious.
   - Test VoiceOver order.
   - Respect Reduce Motion and Increase Contrast.
   - Never communicate meaning by color alone.

8. Preserve decisions.
   - Add major platform decisions to `memory/DECISION-LOG.template.md`.
   - Add implementation constraints to `memory/IMPLEMENTATION-NOTES.template.md`.
   - Add unresolved platform questions to `memory/OPEN-QUESTIONS.template.md`.

## Output

Produce:

- platform fit score,
- screen type and assumptions,
- HIG-aligned findings,
- navigation recommendation,
- accessibility issues,
- SwiftUI/UIKit implementation notes when applicable,
- prioritized fixes,
- memory updates required.

## Checklist

Use [`checklist.md`](checklist.md) for iOS review.

Minimum quality bar:

- [ ] Safe areas respected.
- [ ] Touch targets are at least 44 x 44 pt.
- [ ] Dynamic Type is supported.
- [ ] VoiceOver labels exist.
- [ ] Navigation follows iOS expectations.
- [ ] Semantic colors support light and dark mode.
- [ ] Destructive actions are recoverable or confirmed.
- [ ] Motion respects accessibility settings.
- [ ] Platform decisions are recorded.

## Common Mistakes

- Porting web navigation directly into iOS.
- Hiding primary destinations behind a hamburger menu.
- Using fixed font sizes that break Dynamic Type.
- Ignoring safe areas for interactive controls.
- Treating dark mode as simple inversion.
- Using custom controls where native controls would work.
- Forgetting VoiceOver labels for icon-only buttons.
- Placing destructive actions too close to routine actions.

## Related Skills

- [`../ui-ux-system-generator/SKILL.md`](../ui-ux-system-generator/SKILL.md)
- [`../usability-audit/SKILL.md`](../usability-audit/SKILL.md)
- [`../ui-refactor-visual-audit/SKILL.md`](../ui-refactor-visual-audit/SKILL.md)
- [`../../workflow/product-design-workflow.md`](../../workflow/product-design-workflow.md)
- [`../../memory/IMPLEMENTATION-NOTES.template.md`](../../memory/IMPLEMENTATION-NOTES.template.md)

## Source Attribution

Primary source: Wondel.ai `ios-hig-design` skill, MIT licensed.

- https://github.com/wondelai/skills/tree/main/ios-hig-design
- https://skills.wondel.ai/skills/ios-hig-design/
- Apple Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/

Curated and normalized for Project Kernel's modular skill format.

