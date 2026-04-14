# iOS Platform Design Checklist

## Layout

- [ ] Content respects safe areas.
- [ ] Interactive elements avoid the home indicator and Dynamic Island.
- [ ] Layout works on smallest supported iPhone.
- [ ] iPad layout uses available space intentionally.
- [ ] Standard margins and spacing are consistent.

## Typography

- [ ] Semantic text styles are used.
- [ ] Dynamic Type works at large sizes.
- [ ] Body text is readable.
- [ ] Text does not truncate critical meaning.

## Navigation

- [ ] Primary destinations use tab bar or platform-appropriate structure.
- [ ] Hierarchical flows use navigation stack.
- [ ] Modal tasks have clear dismissal.
- [ ] Back behavior is predictable.
- [ ] Search placement follows iOS conventions.

## Controls

- [ ] Native controls are used where practical.
- [ ] Keyboard type matches input.
- [ ] Text content type supports autofill where relevant.
- [ ] Destructive actions are marked and confirmed.
- [ ] Touch targets are at least 44 x 44 pt.

## Accessibility

- [ ] Icon-only controls have labels.
- [ ] Stateful controls expose values.
- [ ] Complex controls have hints.
- [ ] VoiceOver order is logical.
- [ ] Contrast meets WCAG AA.
- [ ] Reduce Motion is respected.
- [ ] Meaning is not conveyed by color alone.

## Memory

- [ ] Platform decisions recorded.
- [ ] Open HIG questions captured.
- [ ] Implementation notes updated.

