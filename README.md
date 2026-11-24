[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Andd291/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard)
[![reward](https://make.fun/badge/news-image-20261123/Andd291/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

# 23 November 2026 — The World in One Day

make.fun bounty entry: [Sum up 23 November's world news in one image](https://make.fun/bounty/news-image-20261123).

A newspaper front page (`entry.png`, 512×1024 PNG) summing up Monday 23 November 2026 in six stories:

1. **COP31 ends without a deal** — Climate talks in Antalya close with no overall agreement on fossil fuels or money; the longest UN climate summit ever.
2. **Ukraine sea drones sink Russian corvette** — The Merkury goes down in Benghazi port, Libya.
3. **Nvidia brings back Jensen Huang** — Huang reinstated as CEO; shares jump ~33%, S&P 500 up 4.8%.
4. **Iran vows all means against US blockade** — Tehran responds to the US naval blockade; a drone is downed over the Gulf.
5. **Trump calls Putin "my friend"** — After the Shenzhen summit with Xi Jinping.
6. **Mexico captures "El Chapo Isidro"** — FBI most-wanted fugitive Fausto Isidro Meza Flores caught in Sinaloa.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` deterministically copies `entry.png` to the output directory (byte-identical on every run, no network).

## License

MIT — see [LICENSE](LICENSE).
