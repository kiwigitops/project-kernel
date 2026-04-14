# Ship Readiness Skill

## What It Is For

Use this skill before releasing, merging, publishing, or handing off work.

## When To Use It

- A user-facing change is ready.
- A release is being prepared.
- A project is being transferred to another maintainer.
- A major refactor is complete.

## Process

1. Confirm the intended release scope.
2. Run tests, lint, build, or equivalent checks.
3. Review setup docs against current commands.
4. Update changelog for user-visible changes.
5. Check known issues and open questions.
6. Confirm rollback or mitigation options for risky changes.
7. Run the definition of done.
8. Write release notes or handoff notes.

## Expected Output

- Release or merge recommendation.
- Verification summary.
- Known risks.
- Follow-up work.

## Pitfalls To Avoid

- Shipping with undocumented setup changes.
- Treating passing tests as the whole quality bar.
- Releasing without noting known limitations.
- Forgetting handoff context.

## Related Files

- [`../foundation/DEFINITION-OF-DONE.md`](../foundation/DEFINITION-OF-DONE.md)
- [`../workflow/release-workflow.md`](../workflow/release-workflow.md)
- [`../memory/CURRENT-STATE.template.md`](../memory/CURRENT-STATE.template.md)

