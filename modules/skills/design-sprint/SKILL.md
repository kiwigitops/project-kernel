# Design Sprint

## Purpose

Run a structured five-day product validation sprint that maps a risky product challenge, generates competing solution sketches, chooses a direction, builds a realistic prototype, and tests it with users before production work begins.

This skill is adapted from Wondel.ai's `design-sprint` Claude skill, which is based on the GV/Jake Knapp sprint model. The Project Kernel version keeps the five-day operating logic, adds memory outputs, and standardizes the result for drag-and-drop project use.

## When to Use

Use this skill when:

- a team needs to de-risk a product bet before building,
- stakeholders disagree about the right direction,
- a prototype should be tested with users in one week,
- a feature has high uncertainty or high implementation cost,
- a project needs a focused decision instead of open-ended debate,
- or a product idea needs customer evidence before roadmap commitment.

Do not use this for routine implementation, small UI polish, or ongoing optimization. Use the Lean UX or usability audit flow for lighter experiments.

## Activation

Trigger this skill when the request mentions:

- design sprint,
- validate in a week,
- GV sprint,
- rapid prototype,
- test with users,
- risky idea,
- prototype testing,
- design workshop,
- stakeholder alignment,
- or de-risk before building.

## Inputs Required

- Product or feature challenge.
- Long-term goal or desired product outcome.
- Target user or customer segment.
- Known risks, assumptions, and open questions.
- Available decision maker.
- Sprint team members and roles.
- Prototype medium: Figma, clickable mock, landing page, scripted demo, or service simulation.
- Testing plan, including participant type and recruitment path.

## Process

1. Frame the sprint.
   - Name the big challenge.
   - Confirm the decision maker.
   - Confirm the sprint window and whether it is full five-day or compressed.
   - Write the long-term goal as a future truth.
   - Convert major risks into sprint questions.

2. Monday: Map.
   - Map the customer journey from discovery to success in 5-15 steps.
   - Interview internal experts: product, support, sales, engineering, design, data.
   - Capture problems as "How might we..." notes.
   - Vote silently on the most important opportunity areas.
   - Let the decision maker select the target moment on the journey.

3. Tuesday: Sketch.
   - Run lightning demos from competitors and analogous products.
   - Decide whether to swarm one target or divide by journey section.
   - Work individually, not through group brainstorming.
   - Use notes, rough ideas, Crazy 8s, then a self-explanatory solution sketch.
   - Keep sketches anonymous to reduce hierarchy bias.

4. Wednesday: Decide.
   - Review sketches silently first.
   - Use heat-map dots to mark promising parts.
   - Discuss each sketch by describing what it does, not defending who made it.
   - Run a straw poll.
   - Let the decision maker make the final call.
   - Create a 10-15 step storyboard for the prototype.

5. Thursday: Prototype.
   - Build only what will be tested.
   - Aim for realistic facade, not production quality.
   - Assign roles: makers, stitcher, writer, collector, interviewer.
   - Make the prototype believable enough to trigger honest user reactions.
   - Rehearse the interview and run one internal trial.

6. Friday: Test.
   - Test with 5 target users when possible.
   - Use the same script for each session.
   - Observe silently, capture evidence, and avoid explaining the prototype.
   - Look for patterns across sessions.
   - Decide whether the concept is validated, invalidated, or needs another experiment.

7. Preserve the outcome.
   - Add the sprint decision to `memory/DECISION-LOG.template.md`.
   - Update `memory/CURRENT-STATE.template.md` with the chosen direction.
   - Add unresolved risks to `memory/OPEN-QUESTIONS.template.md`.
   - Add implementation follow-up to roadmap or priorities.

## Output

Produce:

- sprint challenge and long-term goal,
- sprint questions,
- customer journey map summary,
- selected target moment,
- solution sketches summary,
- decision rationale,
- storyboard,
- prototype plan,
- user test script,
- test findings,
- decision: proceed, revise, pause, or run another experiment,
- memory updates required.

## Checklist

Use [`checklist.md`](checklist.md) during facilitation.

Minimum quality bar:

- [ ] Decision maker identified.
- [ ] Sprint questions are testable.
- [ ] Journey map is user-centered, not org-centered.
- [ ] Target moment is narrow enough to prototype.
- [ ] Sketching happened individually.
- [ ] Prototype tests the riskiest assumption.
- [ ] User test script avoids leading questions.
- [ ] Findings are based on observed behavior.
- [ ] Decision and follow-up are captured in memory.

## Common Mistakes

- Choosing a challenge too broad for one week.
- Letting stakeholders debate instead of time-boxing decisions.
- Skipping Monday mapping and losing shared context.
- Group-brainstorming the solution too early.
- Making the prototype too polished or too functional.
- Testing with the wrong participants.
- Treating user compliments as validation.
- Failing to record the decision after the sprint.

## Related Skills

- [`../usability-audit/SKILL.md`](../usability-audit/SKILL.md)
- [`../ui-ux-system-generator/SKILL.md`](../ui-ux-system-generator/SKILL.md)
- [`../retention-hook-analysis/SKILL.md`](../retention-hook-analysis/SKILL.md)
- [`../../workflow/product-design-workflow.md`](../../workflow/product-design-workflow.md)
- [`../../memory/DECISION-LOG.template.md`](../../memory/DECISION-LOG.template.md)

## Source Attribution

Primary source: Wondel.ai `design-sprint` skill, MIT licensed.

- https://github.com/wondelai/skills/tree/main/design-sprint
- https://skills.wondel.ai/skills/design-sprint/

Curated and normalized for Project Kernel's modular skill format.

