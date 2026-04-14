# Testing Skill

## What It Is For

Use this skill to decide what testing is appropriate for a change.

## When To Use It

- Behavior changes.
- A bug is fixed.
- A risky refactor begins.
- A release is near.

## Process

1. Identify the behavior under test.
2. Choose the lowest test level that proves the behavior.
3. Add regression tests for fixed bugs.
4. Keep fixtures small and readable.
5. Avoid tests that depend on execution order or external state.
6. Run related tests first, then broader checks.
7. Document manual verification when automation is not practical.

## Expected Output

- Test coverage summary.
- Commands run.
- Remaining test gaps.

## Pitfalls To Avoid

- Testing implementation details instead of behavior.
- Using snapshots as a substitute for intent.
- Ignoring flaky tests.
- Leaving manual-only behavior undocumented.

## Related Files

- [`../foundation/CODE-STANDARDS.md`](../foundation/CODE-STANDARDS.md)
- [`../foundation/QUALITY-BAR.md`](../foundation/QUALITY-BAR.md)
- [`ship-readiness-skill.md`](ship-readiness-skill.md)

