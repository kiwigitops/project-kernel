# Refactor Skill

## What It Is For

Use this skill to improve structure without changing intended behavior.

## When To Use It

- A feature is hard to add because responsibilities are tangled.
- Naming no longer matches behavior.
- Duplication has become meaningful.
- Tests are present enough to protect behavior, or a characterization path exists.

## Process

1. State the behavior that must not change.
2. Identify the smallest structural improvement that unlocks the goal.
3. Add or confirm tests around the behavior.
4. Move one responsibility at a time.
5. Keep public interfaces stable unless the change explicitly includes a migration.
6. Run checks after each meaningful step.
7. Update docs or architecture notes if boundaries changed.
8. Record decisions when the refactor changes project direction.

## Expected Output

- Refactor goal.
- Behavior preservation evidence.
- Files or boundaries changed.
- Follow-up work, if any.

## Pitfalls To Avoid

- Refactoring and feature work in the same unreviewable change.
- Creating abstraction for a hypothetical future.
- Renaming without improving clarity.
- Moving code without updating docs, imports, or tests.

## Related Files

- [`../foundation/ARCHITECTURE-GUIDE.md`](../foundation/ARCHITECTURE-GUIDE.md)
- [`../philosophy/abstraction-principles.md`](../philosophy/abstraction-principles.md)
- [`../memory/DECISION-LOG.template.md`](../memory/DECISION-LOG.template.md)

