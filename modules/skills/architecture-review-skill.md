# Architecture Review Skill

## What It Is For

Use this skill to review changes that alter boundaries, dependencies, data flow, or long-term maintainability.

## When To Use It

- A new module, service, package, or integration is introduced.
- A dependency direction changes.
- A core data model changes.
- A refactor affects multiple areas.

## Process

1. State the architectural change in one sentence.
2. Identify the problem it solves.
3. List affected boundaries.
4. Check dependency direction and ownership.
5. Compare at least one alternative.
6. Identify migration, testing, and rollback needs.
7. Record the decision if accepted.

## Expected Output

- Architecture review summary.
- Accepted or rejected recommendation.
- Required doc or decision updates.
- Risks and mitigation.

## Pitfalls To Avoid

- Approving a structure because it looks familiar.
- Moving complexity into more places.
- Adding abstraction without current pressure.
- Forgetting operational consequences.

## Related Files

- [`../foundation/ARCHITECTURE-GUIDE.md`](../foundation/ARCHITECTURE-GUIDE.md)
- [`../memory/DECISION-LOG.template.md`](../memory/DECISION-LOG.template.md)
- [`../philosophy/engineering-principles.md`](../philosophy/engineering-principles.md)

