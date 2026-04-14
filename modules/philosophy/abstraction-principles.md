# Abstraction Principles

## Wait For Real Pressure

Abstractions are easiest to design after the project has examples.

Operational rule: avoid extracting a shared layer until at least two real use cases need the same concept.

## Duplication Can Be Information

Early duplication can reveal where boundaries should be.

Operational rule: remove duplication when it obscures intent or creates repeated change risk, not merely because it exists.

## Abstractions Should Make Use Easier

A good abstraction reduces the amount of context needed to do the next change.

Operational rule: if an abstraction requires every caller to understand its internals, it has not paid for itself.

## Boundaries Should Protect Change

Separate things that change for different reasons.

Operational rule: document what each major boundary owns and what it must not know about.

## Reversibility Matters

When uncertain, choose a path that can be changed later without rewriting the project.

Operational rule: record assumptions behind architectural choices.

