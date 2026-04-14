# Code Standards

These standards describe how code should be written in this project. Adapt the stack-specific sections after the project chooses tools.

## General Standards

- Code should make the common path obvious.
- Names should explain intent before implementation.
- Functions should have one reason to change.
- Modules should expose small, stable interfaces.
- Errors should be handled near the place where recovery is possible.
- Side effects should be visible at boundaries.
- Tests should describe behavior, not internal trivia.

## Dependency Standards

Add a dependency only when it:

- removes meaningful complexity,
- is actively maintained,
- has a compatible license,
- fits the project size,
- does not replace a simple standard-library feature,
- and has an exit path if it becomes a liability.

## Comment Standards

Use comments for:

- non-obvious tradeoffs,
- surprising constraints,
- external system behavior,
- security or performance reasoning,
- and decisions that would be easy to undo accidentally.

Avoid comments that restate the code.

## Error Handling

- Fail loudly during setup and validation.
- Return useful messages for user-facing errors.
- Preserve original error context when wrapping exceptions.
- Log enough information to debug without exposing secrets.

## Testing Expectations

- Add focused tests for changed behavior.
- Add regression tests for bug fixes when feasible.
- Prefer deterministic tests over snapshot noise.
- Keep test names readable as behavior statements.
- Document manual verification when automated tests are not practical.

