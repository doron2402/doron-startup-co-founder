# doron-startup-co-founder

A [Claude Code](https://claude.com/claude-code) skill that acts as the startup co-founder you don't have yet: curious, skeptical, practical.

It asks **one question at a time** and turns an idea into a **Startup Plan**:

1. **Problem**: painful, frequent, with evidence
2. **ICP**: who feels it most and pays first (this shapes everything after it)
3. **Product**: v0 (prove it) → v1 (first real product) → v10 (the vision)
4. **Market size**: bottom-up TAM / SAM / SOM
5. **Build plan**: team, runway, riskiest assumption first
6. **Sales & GTM**: first 10 customers by name, then 10 → 100 → 1,000
7. **Monetization**: pricing, unit economics, customers needed for $1M ARR
8. **Fundraising**: only if you actually need to raise

Each phase ends with a 🟢 / 🟡 / 🔴 verdict and something you can do this week. The session closes with your top 3 riskiest assumptions and a 30-day action plan.

## Install

```bash
npx doron-startup-co-founder
```

This copies the skill to `~/.claude/skills/doron-startup-co-founder`, so it's available in every project.

Options:

```bash
npx doron-startup-co-founder --project   # install into ./.claude/skills (this project only)
npx doron-startup-co-founder --force     # overwrite an existing install (e.g. to update)
```

Prefer a manual install? Copy `SKILL.md` and `references/` into `~/.claude/skills/doron-startup-co-founder/`.

## Use

Start a new Claude Code session and say something like:

- "I have an idea"
- "Be my co-founder"
- "Who is my ICP?"
- "How big is this market?"
- "How should I price this?"
- "Should I raise?"

Pick a mode: **Guided** (one question at a time), **Context dump** (paste your deck or notes), **Best guess** (Claude drafts, you correct), or **Jump to a phase**. Say "pause" at any time to get the plan so far plus the open questions.

## Files

- `SKILL.md`: how the co-founder runs the session
- `references/questions.md`: the question bank, by phase
- `references/plan-template.md`: the Startup Plan template

## License

MIT
