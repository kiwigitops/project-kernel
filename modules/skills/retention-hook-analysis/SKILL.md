# Retention Hook Analysis

## Purpose

Diagnose and improve product retention using the Hook Model and behavior design: triggers, actions, variable rewards, investments, B=MAP, ability-chain friction, prompts, habit testing, and ethical boundaries.

This skill merges Wondel.ai's `hooked-ux` and `improve-retention` implementations into one Project Kernel skill so retention analysis can connect habit loops with activation and friction diagnostics.

## When to Use

Use this skill when:

- users sign up but do not return,
- activation is low,
- a product needs an engagement loop,
- onboarding feels too hard,
- notifications are underperforming or annoying users,
- a team wants to identify the "aha moment",
- cohort retention drops sharply,
- or a product needs ethical habit-loop review.

Do not use this to maximize engagement at user expense. The skill includes explicit ethical checks.

## Activation

Trigger this skill when the request mentions:

- retention,
- churn,
- users drop off,
- activation,
- day-one retention,
- day-seven retention,
- habit loop,
- Hook Model,
- B=MAP,
- Fogg Behavior Model,
- aha moment,
- onboarding friction,
- prompt design,
- notification strategy,
- variable rewards,
- engagement loop,
- or habit testing.

## Inputs Required

- Product and user segment.
- Current retention or activation metrics.
- Target behavior.
- Onboarding flow or core loop.
- Trigger channels: email, push, in-app, social, calendar, routine.
- Known user motivation.
- Current friction points.
- Ethical constraints and vulnerable user considerations.

## Process

1. Define the target behavior.
   - Name the smallest behavior that predicts retention.
   - Separate business metric from user behavior.
   - Identify whether the behavior is daily, weekly, monthly, or event-driven.

2. Diagnose B=MAP.
   - Motivation: why would the user care now?
   - Ability: how easy is the behavior across time, money, physical effort, mental effort, social deviance, and non-routine?
   - Prompt: what asks the user to act, and does it arrive when motivation and ability are sufficient?

3. Run the ability-chain friction audit.
   - Rate each factor 1-5.
   - Treat the lowest score as the bottleneck.
   - Prefer making the behavior easier before trying to increase motivation.
   - Shrink the behavior to a starter step.

4. Map the Hook Model.
   - Trigger: external and internal cues.
   - Action: simplest behavior in anticipation of value.
   - Variable reward: social, discovery/resource, or mastery reward.
   - Investment: what the user adds that makes the next cycle better.

5. Identify the habit path.
   - Who are the habitual users?
   - What sequence do they follow?
   - What internal trigger precedes usage?
   - Which early actions correlate with retention?

6. Design ethical improvements.
   - Add prompts only when they serve the user's goal.
   - Add rewards only when they deliver real value.
   - Add investment only after reward.
   - Do not exploit addiction, anxiety, grief, children, or regret-based loops.
   - Provide exits, notification controls, and data portability.

7. Define experiments.
   - Choose one retention hypothesis.
   - Define leading indicator, success threshold, cohort, and time window.
   - Update roadmap or experiment log.

8. Preserve context.
   - Add the retention hypothesis to `memory/WORKING-ASSUMPTIONS.template.md`.
   - Add experiment decisions to `memory/DECISION-LOG.template.md`.
   - Add metric status to `memory/CURRENT-STATE.template.md`.
   - Add unresolved data questions to `memory/OPEN-QUESTIONS.template.md`.

## Output

Produce:

- target retention behavior,
- B=MAP diagnosis,
- ability-chain friction audit,
- Hook Model map,
- habit path hypothesis,
- ethical risk review,
- retention experiment plan,
- metrics to track,
- product changes recommended,
- memory updates required.

## Checklist

Use [`checklist.md`](checklist.md) to evaluate the loop.

Minimum quality bar:

- [ ] Target behavior is concrete.
- [ ] Motivation, ability, and prompt are separately diagnosed.
- [ ] Ability-chain bottleneck is identified.
- [ ] Trigger, action, reward, investment are mapped.
- [ ] Ethical risk is reviewed.
- [ ] Success metric and time window are defined.
- [ ] Hypothesis is written before changes.
- [ ] Memory files are updated.

## Common Mistakes

- Treating retention as a notification problem.
- Asking for investment before the user receives value.
- Designing for high motivation that fades after signup.
- Making the core action too large.
- Adding variable rewards without genuine user benefit.
- Measuring opinions instead of behavior.
- Ignoring habitual-user cohorts.
- Using dark patterns to create short-term engagement.
- Failing to record assumptions and experiment outcomes.

## Related Skills

- [`../design-sprint/SKILL.md`](../design-sprint/SKILL.md)
- [`../usability-audit/SKILL.md`](../usability-audit/SKILL.md)
- [`../feature-planning-skill.md`](../feature-planning-skill.md)
- [`../../workflow/product-design-workflow.md`](../../workflow/product-design-workflow.md)
- [`../../memory/WORKING-ASSUMPTIONS.template.md`](../../memory/WORKING-ASSUMPTIONS.template.md)

## Source Attribution

Primary source patterns:

- Wondel.ai `hooked-ux`, MIT: https://github.com/wondelai/skills/tree/main/hooked-ux
- Wondel.ai hosted `hooked-ux`: https://skills.wondel.ai/skills/hooked-ux/
- Wondel.ai `improve-retention`, MIT: https://github.com/wondelai/skills/tree/main/improve-retention
- Wondel.ai hosted `improve-retention`: https://skills.wondel.ai/skills/improve-retention/

Curated and normalized for Project Kernel's modular skill format.

