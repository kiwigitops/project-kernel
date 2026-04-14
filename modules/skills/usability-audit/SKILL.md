# Usability Audit

## Purpose

Evaluate an interface for usability problems using real heuristic audit structure: Nielsen's heuristics, Krug-style clarity checks, task walkthroughs, severity ratings, accessibility basics, and dark-pattern awareness.

This skill is adapted primarily from Wondel.ai's `ux-heuristics` implementation and strengthened with OilOil's task-first review mode and priority format.

## When to Use

Use this skill when:

- users seem confused,
- a flow has low completion,
- navigation or labels are unclear,
- forms have errors or abandonment,
- an interface needs usability review before launch,
- a design needs a task-based walkthrough,
- or an AI-generated UI needs practical UX critique.

Use `ui-refactor-visual-audit` when the problem is mainly visual hierarchy, spacing, color, or polish. Use `retention-hook-analysis` when the problem is returning behavior or churn.

## Activation

Trigger this skill when the request mentions:

- usability audit,
- UX review,
- heuristic evaluation,
- users are confused,
- form usability,
- navigation problem,
- cognitive walkthrough,
- Nielsen heuristics,
- Don't Make Me Think,
- task completion,
- accessibility check,
- or dark patterns.

## Inputs Required

- Interface surface: screenshot, URL, Figma export, HTML/CSS, app screen, wireframe, or description.
- Primary user and task.
- Platform: web, mobile web, desktop app, iOS, Android.
- Current issue or goal.
- Known constraints.
- Desired audit depth: quick, full, or task-specific.

## Process

1. State assumptions.
   - Identify platform, primary user, primary task, and surface type.
   - If critical information is missing, proceed with explicit assumptions instead of blocking.

2. Run a quick task-first scan.
   - Can the user tell where they are?
   - Is the primary action obvious?
   - Can the user predict what each action does?
   - Is feedback visible after action?
   - Can the user recover from mistakes?

3. Apply Krug-style clarity checks.
   - Remove ambiguity in labels and CTAs.
   - Reduce unnecessary words.
   - Confirm the screen passes a "dropped in cold" orientation test: site/app identity, page title, current section, available actions, hierarchy, and search if relevant.

4. Apply Nielsen heuristic review.
   - Visibility of system status.
   - Match with real-world language.
   - User control and freedom.
   - Consistency and standards.
   - Error prevention.
   - Recognition over recall.
   - Flexibility for power users.
   - Minimalist design.
   - Error recovery.
   - Help and documentation.

5. Rate severity.
   - 0: not a usability problem.
   - 1: cosmetic.
   - 2: minor delay or frustration.
   - 3: major task failure risk.
   - 4: catastrophic task blocker.
   - Consider frequency, impact, and persistence.

6. Add accessibility and ethics checks.
   - Touch targets, keyboard access, focus, labels, contrast, non-color cues.
   - Check for hidden costs, forced continuity, misleading hierarchy, confirmshaming, privacy friction, and hard-to-cancel flows.

7. Produce fixes.
   - Prioritize P0/P1/P2 or severity 4/3/2.
   - Give concrete layout, copy, component, state, or navigation fixes.
   - Separate quick wins from structural changes.

8. Preserve context.
   - Add severe issues to `memory/KNOWN-ISSUES.template.md`.
   - Add unresolved research questions to `memory/OPEN-QUESTIONS.template.md`.
   - Add audit summary to `memory/DESIGN-REVIEW-NOTES.template.md`.

## Output

Produce:

- audit assumptions,
- detected surface type,
- task summary,
- usability score or severity summary,
- prioritized findings,
- evidence for each finding,
- recommended fix,
- quick wins,
- accessibility notes,
- dark-pattern notes,
- memory updates required.

## Checklist

Use [`checklist.md`](checklist.md) for the full audit.

Minimum quality bar:

- [ ] Primary task is identified.
- [ ] Findings include evidence, not just opinion.
- [ ] Severity is assigned.
- [ ] Fixes are actionable.
- [ ] Accessibility is covered.
- [ ] Error states and recovery are covered.
- [ ] Dark patterns are checked.
- [ ] Severe issues are added to memory.

## Common Mistakes

- Auditing aesthetics while ignoring task completion.
- Giving vague advice like "make it cleaner."
- Treating all issues as equal.
- Ignoring copy and labels.
- Missing loading, empty, error, and success states.
- Counting clicks instead of measuring confidence per step.
- Accepting hover-only information.
- Forgetting mobile and keyboard users.
- Failing to preserve known issues after the audit.

## Related Skills

- [`../ui-refactor-visual-audit/SKILL.md`](../ui-refactor-visual-audit/SKILL.md)
- [`../ui-ux-system-generator/SKILL.md`](../ui-ux-system-generator/SKILL.md)
- [`../ios-platform-design/SKILL.md`](../ios-platform-design/SKILL.md)
- [`../../workflow/product-design-workflow.md`](../../workflow/product-design-workflow.md)
- [`../../memory/KNOWN-ISSUES.template.md`](../../memory/KNOWN-ISSUES.template.md)

## Source Attribution

Primary source patterns:

- Wondel.ai `ux-heuristics`, MIT: https://github.com/wondelai/skills/tree/main/ux-heuristics
- Wondel.ai hosted skill: https://skills.wondel.ai/skills/ux-heuristics/
- OilOil UI/UX Guide review mode, Apache-2.0: https://github.com/oil-oil/oiloil-ui-ux-guide/tree/main/skills/oiloil-ui-ux-guide
- BehiSecc awesome list discovery entry for OilOil UI/UX Guide: https://github.com/BehiSecc/awesome-claude-skills

Curated and normalized for Project Kernel's modular skill format.

