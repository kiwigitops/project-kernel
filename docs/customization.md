# Customization

Project Kernel is meant to be edited. The seed files are strong defaults, not sacred text.

## Five-Minute Customization Path

1. Rename copied folders if your project already uses another convention.
2. Replace bracketed placeholders like `[project name]`.
3. Fill setup commands and supported runtime versions.
4. Write current goals, constraints, and assumptions.
5. Delete sections that do not apply.

## What To Customize First

- `foundation/PROJECT-RULES.md`
- `foundation/SETUP-CHECKLIST.md`
- `docs/README.template.md`
- `memory/PROJECT-CONTEXT.template.md`
- `memory/CURRENT-STATE.template.md`

## Keep These Stable

Try to keep these concepts even if you rename files:

- project rules,
- setup instructions,
- current state,
- decision log,
- known issues,
- definition of done,
- review flow.

## Stack-Specific Guidance

Add stack guidance only after the project has chosen tools. Good stack rules include:

- command names,
- folder placement,
- testing strategy,
- dependency policy,
- deployment flow,
- framework-specific pitfalls.

## Avoid Over-Customizing

Do not turn the seed into a process maze. If a folder or checklist does not help someone make better changes, remove it.

