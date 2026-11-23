[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/fatarichi/tiny-stack-vm-01-run-20261122/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/fatarichi/tiny-stack-vm-01-run-20261122/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)

# tiny-stack-vm

A small, correct interpreter for make.fun's tiny stack ISA (ISA.md in the kit).

`main.ts` runs all 40 programs of a set (`MAKEFUN_INPUT_DIR`, `MAKEFUN_OUTPUT_DIR`)
and writes each answer as `<id>/stdout.bin` + `<id>/exit.txt`.

It handles the ISA's hard rules: wrapping `MUL` via `Math.imul`, unsigned
`DIVU`/`MODU`/`LTU`, all ten traps with their own exit codes, the 256-value
stack, 64-deep call stack, 256-word memory, and the step/output limits.

MIT licensed. Practice set: 40/40, score 1,000,000.
