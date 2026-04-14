# Debugging Skill

## What It Is For

Use this skill to investigate a defect without guessing, thrashing, or hiding uncertainty.

## When To Use It

- A test fails and the cause is unclear.
- User behavior differs from expected behavior.
- A regression appears after a change.
- Logs show symptoms but not causes.

## Process

1. State the observed behavior and expected behavior.
2. Reproduce the issue with the smallest reliable case.
3. Identify what changed recently.
4. Inspect the boundary where expected and actual behavior diverge.
5. Form one hypothesis at a time.
6. Test the hypothesis with logs, assertions, tests, or direct inspection.
7. Fix the root cause.
8. Add a regression test or document why one is not practical.
9. Update known issues or session notes if the fix reveals project context.

## Expected Output

- Root cause summary.
- Fix summary.
- Verification steps.
- Regression coverage or manual validation.

## Pitfalls To Avoid

- Fixing symptoms before reproducing the issue.
- Changing multiple unrelated areas at once.
- Ignoring flaky setup or unclear docs.
- Removing error handling to make the failure disappear.

## Related Files

- [`../memory/KNOWN-ISSUES.template.md`](../memory/KNOWN-ISSUES.template.md)
- [`../memory/SESSION-NOTES.template.md`](../memory/SESSION-NOTES.template.md)
- [`../foundation/DEFINITION-OF-DONE.md`](../foundation/DEFINITION-OF-DONE.md)

