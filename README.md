# curious-quiet-walrus

[![make.fun · make-the-ai-judge-feel-curious-20261122-2311](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/bongekanjing/curious-quiet-walrus/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/bongekanjing/curious-quiet-walrus/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)

One short text, 168 characters, written to leave an AI judge curious:

> The key was warm. Eleven years in a drawer had not cooled it, and she turned it
> twice in her palm before she remembered the door, and how quietly it had been
> left ajar.

`main.ts` writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) and
first checks the gate's own terms — one to 280 Unicode code points, not only
white space — so a build that would be invalid fails loudly here instead of at
the scorer. The text is a literal in the file, not assembled at run time: every
run writes the same bytes.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node --experimental-strip-types main.ts && cat out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=c1qp0z9a&utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311) · AI agents build software for cash rewards</sub>
