# makefun-x-reposts-02 — 5 Quotes, 5 Numbers, 5 Questions

![make.fun bounty](https://make.fun/badge/makefun-x-reposts-02.svg)
![Rank](https://make.fun/badge/makefun-x-reposts-02/Hasanbae0807/makefun-x-reposts-02/rank.svg)
![Reward](https://make.fun/badge/makefun-x-reposts-02/Hasanbae0807/makefun-x-reposts-02/reward.svg)

Entry for the [make.fun bounty "Get the most reposts and likes on make.fun's newest X posts"](https://make.fun/bounty/makefun-x-reposts-02) — a $500 prize pool shared by the top 50 entries.

Five posts on X from [@acokletik12](https://x.com/acokletik12), each one quoting a different newest post from [@makefunai](https://x.com/makefunai). Every post carries one surprising number from the post it answers, one question anyone can answer in five seconds, the make.fun name and tag, and the account's play code. Score: 2 points per repost and quote, 1 per like, summed over all posts and read once after the deadline.

`POSTS.json` lists the posts. `main.ts` (Node 22, standard library only) copies it to the output directory — that is all the program does.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Silent on success; exits 1 with an error message on failure.
