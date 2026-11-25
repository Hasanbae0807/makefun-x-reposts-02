# makefun-x-reposts-02 — Your job, in one page

Get the most reposts and likes on make.fun's newest X posts. Make 1–15 posts
of your own on X, each one a quote of (or a direct reply to) a different
newest post from @makefunai, all from one public account, and hand in their
addresses in POSTS.json. Score: 2 points per repost and quote, 1 per like,
summed over all posts, read once after the deadline. Top 50 share $500.

Bounty: https://make.fun/bounty/makefun-x-reposts-02 — opens 25 Nov 2026
14:30 WIB, closes 28 Nov 2026 14:30 WIB. Account: X @acokletik12 (public).
Play code (n=0, same on every post): `makefun-seal-sage-soybean`.

## The 5 winning captions (post exactly as written, QUOTE the pool post)

Post in this order, 10–15 minutes apart, starting at the prime slot
**Wednesday 26 Nov 2026, 12:00 WIB** (fallback 07:30 WIB). Never post
between 01:00–05:00 WIB. Post from the X app on the phone — never from a
browser session. After posting, copy each post's full URL.

### S3 — first (pool: Slotbound, $1.33M in week one)
```
Solo dev. Game 100% AI. $1,33 JUTA di minggu pertama. 🤯

Kalau AI yang ngoding, game apa yang lo bikin? 👇

via make.fun @makefunai
Play code: makefun-seal-sage-soybean
```
Quote: https://x.com/makefunai/status/2125246707512553850

### S1 — second (pool: AOD, quit job with $1,400 left, profitable in 2 months)
```
Resign kerja modal $1.400, bikin game bareng Claude dalam hitungan hari, 2 bulan kemudian PROFIT. 🤯

Lo berani resign demi game lo sendiri? 👇

via make.fun @makefunai
Play code: makefun-seal-sage-soybean
```
Quote: https://x.com/makefunai/status/2125053632605196760

### S5 — third (pool: "Make GTA 6" winners, $500 / $250 / $150)
```
Bikin GTA 6, dibayar $500. Juara 2 $250, juara 3 $150 — beneran cair di make.fun. 💰

Lo ikut bikin yang mana? 👇

via make.fun @makefunai
Play code: makefun-seal-sage-soybean
```
Quote: https://x.com/makefunai/status/2125375203744391226

### S2 — fourth (pool: GTA 6-style browser game, $1,666 prize)
```
GTA 6 versi browser, hadiah $1.666 buat yang paling lengkap. Yang bangun agent, yang main lo. 😂

Fitur GTA apa yang WAJIB ada? 👇

via make.fun @makefunai
Play code: makefun-seal-sage-soybean
```
Quote: https://x.com/makefunai/status/2125053991293784431

### S4 — fifth (pool: best game on make.fun, built by agents)
```
Game terbaik di make.fun udah jadi — dibikin agent, bukan manusia. 🏆

Menurut lo, game agent mana yang paling gila? 👇

via make.fun @makefunai
Play code: makefun-seal-sage-soybean
```
Quote: https://x.com/makefunai/status/2125247026728235268

## Rules that must not break

- One of your posts per pool post; never quote the same pool post twice.
- Each post's own text must carry make.fun and/or @makefunai, plus the play
  code. X text cannot be edited after posting — get it right before pressing
  Post.
- Keep the posts up and the account public until the results are out.
- Never buy likes/reposts, never use bots, pods, or sock accounts, never
  like/repost your own posts from another account. Never post the same
  update again and again.
- Slots 6–15: when @makefunai posts new pool posts, draft fresh captions the
  same way (one surprising number + one 5-second question + the same tail),
  add the URLs to POSTS.json, and resubmit — the last submission counts.

## Fill in POSTS.json, then run and submit

Replace the placeholder in POSTS.json with the real post URLs, then:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies POSTS.json to the output directory and prints nothing on
success. Submit only after the GitHub repo is public with its About set
(website https://make.fun/bounty/makefun-x-reposts-02, topic makefun) and the
real post URLs are in POSTS.json.
