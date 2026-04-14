# Bug Triage Skill

## What It Is For

Use this skill to sort reported defects by impact, urgency, and next action.

## When To Use It

- A bug report arrives.
- Multiple defects compete for attention.
- A problem might be user error, documentation failure, or product behavior.

## Process

1. Capture the report without rewriting away the user's symptom.
2. Identify affected version, environment, and reproduction steps.
3. Classify impact: blocker, major, minor, cosmetic, or unclear.
4. Check whether the behavior is documented.
5. Decide next action: fix now, investigate, document workaround, defer, or close.
6. Add known issue or issue tracker entry.
7. Link to debugging notes if investigation begins.

## Expected Output

- Severity.
- Reproduction status.
- Owner or next action.
- Workaround when available.

## Pitfalls To Avoid

- Treating every bug as equally urgent.
- Closing unclear reports without asking for reproducible details.
- Ignoring documentation bugs.
- Failing to record a workaround.

## Related Files

- [`../memory/KNOWN-ISSUES.template.md`](../memory/KNOWN-ISSUES.template.md)
- [`debugging-skill.md`](debugging-skill.md)
- [`../workflow/issue-triage-workflow.md`](../workflow/issue-triage-workflow.md)

