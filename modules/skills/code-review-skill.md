# Code Review Skill

## What It Is For

Use this skill to review changes for correctness, maintainability, and project fit.

## When To Use It

- Before merge.
- Before accepting generated code.
- Before release.
- After a risky refactor.

## Process

1. Understand the intent of the change.
2. Review behavior first, style second.
3. Check edge cases and failure modes.
4. Check tests and verification.
5. Check documentation, changelog, and memory updates.
6. Look for unnecessary scope expansion.
7. Identify blocking issues separately from suggestions.

## Expected Output

- Findings ordered by severity.
- File and line references when possible.
- Test gaps or residual risk.
- Clear approval, request changes, or follow-up recommendation.

## Pitfalls To Avoid

- Nitpicking style before checking behavior.
- Reviewing only the diff and missing surrounding context.
- Treating missing docs as minor when setup or usage changed.
- Approving generated code without reading it.

## Related Files

- [`../foundation/QUALITY-BAR.md`](../foundation/QUALITY-BAR.md)
- [`../foundation/DEFINITION-OF-DONE.md`](../foundation/DEFINITION-OF-DONE.md)
- [`../workflow/review-workflow.md`](../workflow/review-workflow.md)

