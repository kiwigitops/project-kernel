# Engineering Principles

## Clarity Over Cleverness

Code is read more often than it is written. Prefer an obvious structure that future maintainers can change safely.

Operational rule: if a clever solution is chosen, document the constraint that made it necessary.

## Boring Reliability Over Flashy Complexity

Use proven patterns until the project has real pressure to justify novelty.

Operational rule: add dependencies, services, and abstractions only when they reduce actual project risk or complexity.

## Structure Should Explain Intent

Folders, names, and boundaries should tell a new contributor where to look.

Operational rule: if a concept appears in code, use the same term in docs, issues, and memory.

## Changes Should Be Reviewable

Large changes are easier to trust when they are made of coherent pieces.

Operational rule: split feature work, refactors, and formatting unless combining them is required.

## Every Project Should Explain Itself

A repo should not require private memory to understand its purpose, setup, architecture, or current state.

Operational rule: treat missing setup, architecture, or decision context as project debt.

