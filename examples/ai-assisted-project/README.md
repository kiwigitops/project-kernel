# AI-Assisted Project Example

## Starting Situation

A developer uses AI assistants for implementation but wants generated work to follow project conventions and preserve session context.

## Use

```bash
node scripts/install-pack.js packs/ai-builder-pack ../ai-project
```

## Result

```text
ai-project/
|-- foundation/
|-- memory/
|-- skills/
|-- workflow/
|-- philosophy/
\-- extras/
    |-- ASSISTANT-CONTEXT.md
    \-- AI-REVIEW-PROMPT.md
```

## Working Loop

1. Read current state and project rules.
2. Give the assistant the relevant context.
3. Ask for a scoped change.
4. Review with `skills/code-review-skill.md`.
5. Update session notes and decision log.

## What Improves

- Assistants inherit project context.
- Generated changes are reviewed against the same standards as human changes.
- Decisions made during AI sessions are not lost.
- The next session starts faster.
