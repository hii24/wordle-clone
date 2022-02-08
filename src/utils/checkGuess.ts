export type LetterStatus = "correct" | "present" | "absent" | "empty";

/**
 * Returns per-letter status. Handles the duplicate-letter case correctly:
 * if guess has 2 of a letter but answer has 1, only one "present" / "correct" is awarded.
 */
export function checkGuess(guess: string, answer: string): LetterStatus[] {
  const result: LetterStatus[] = Array(guess.length).fill("absent");
  const answerCounts: Record<string, number> = {};

  for (const c of answer) answerCounts[c] = (answerCounts[c] ?? 0) + 1;

  // First pass: mark exact matches and decrement available counts
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      result[i] = "correct";
      answerCounts[guess[i]]--;
    }
  }

  // Second pass: mark "present" only if a count is still available
  for (let i = 0; i < guess.length; i++) {
    if (result[i] === "correct") continue;
    if ((answerCounts[guess[i]] ?? 0) > 0) {
      result[i] = "present";
      answerCounts[guess[i]]--;
    }
  }

  return result;
}

/**
 * Aggregate statuses across all guesses for the on-screen keyboard.
 * "correct" beats "present" beats "absent".
 */
export function aggregateLetterStatus(
  guesses: string[],
  answer: string
): Record<string, LetterStatus> {
  const map: Record<string, LetterStatus> = {};
  const rank: Record<LetterStatus, number> = { absent: 1, present: 2, correct: 3, empty: 0 };

  for (const guess of guesses) {
    const statuses = checkGuess(guess, answer);
    for (let i = 0; i < guess.length; i++) {
      const ch = guess[i];
      const cur = map[ch];
      if (!cur || rank[statuses[i]] > rank[cur]) {
        map[ch] = statuses[i];
      }
    }
  }
  return map;
}
