# AI Collaboration Skill

## What It Is For

Use this skill when working with AI assistants so the project remains coherent, reviewable, and context-rich.

## When To Use It

- An assistant is generating or editing code.
- A long session needs continuity.
- The assistant needs project rules, memory, or workflows.
- You want to reduce repeated explanations.

## Process

1. Point the assistant at foundation rules and current state.
2. State the task, constraints, and definition of done.
3. Ask it to inspect existing patterns before editing.
4. Keep changes scoped.
5. Require tests or verification notes.
6. Review generated changes with the code review skill.
7. Update memory files at the end of the session.

## Expected Output

- Scoped implementation or analysis.
- Verification summary.
- Updated memory when context changed.
- Clear follow-up list.

## Pitfalls To Avoid

- Letting generated code invent project conventions.
- Accepting broad rewrites without a reason.
- Skipping review because the output looks plausible.
- Forgetting to preserve decisions made during the session.

## Related Files

- [`../memory/PROJECT-CONTEXT.template.md`](../memory/PROJECT-CONTEXT.template.md)
- [`../memory/SESSION-NOTES.template.md`](../memory/SESSION-NOTES.template.md)
- [`code-review-skill.md`](code-review-skill.md)

