# 🟩 wordle-clone

Built this when Wordle was everywhere in early 2022. Pure React + TypeScript clone with daily word from a 200-word list.

```
┌─────────────────────┐
│  🟩 ⬜ 🟨 🟩 ⬜       │
│  ⬜ 🟨 ⬜ 🟩 ⬜       │
│  🟩 🟩 🟩 🟩 🟩  ← win │
│  ⬜ ⬜ ⬜ ⬜ ⬜       │
│  ⬜ ⬜ ⬜ ⬜ ⬜       │
│  ⬜ ⬜ ⬜ ⬜ ⬜       │
└─────────────────────┘
```

## How to play

- Type a 5-letter word, press Enter
- 🟩 letter is correct + in right place
- 🟨 letter is in the word but wrong place
- ⬜ letter is not in the word
- 6 attempts to guess

## Run locally

```bash
git clone https://github.com/hii24/wordle-clone.git
cd wordle-clone
npm install
npm start
```

Built Feb 2022 to learn how Wordle's "yellow on duplicate letters" logic actually works (it's surprisingly tricky).

MIT License · 2022 Serhii Valko
