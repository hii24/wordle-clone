import React from "react";
import { Cell } from "./Cell";
import { checkGuess, type LetterStatus } from "../utils/checkGuess";

interface BoardProps {
  guesses: string[];
  current: string;
  answer: string;
}

const ROWS = 6;
const COLS = 5;

export function Board({ guesses, current, answer }: BoardProps) {
  const rows: Array<{ letters: string[]; statuses: LetterStatus[] }> = [];

  for (let r = 0; r < ROWS; r++) {
    if (r < guesses.length) {
      const guess = guesses[r];
      rows.push({ letters: guess.split(""), statuses: checkGuess(guess, answer) });
    } else if (r === guesses.length) {
      rows.push({
        letters: current.padEnd(COLS).split(""),
        statuses: Array(COLS).fill("empty"),
      });
    } else {
      rows.push({ letters: Array(COLS).fill(""), statuses: Array(COLS).fill("empty") });
    }
  }

  return (
    <div className="board">
      {rows.map((row, ri) => (
        <div key={ri} className="board-row">
          {row.letters.map((letter, ci) => (
            <Cell key={ci} letter={letter.trim()} status={row.statuses[ci]} />
          ))}
        </div>
      ))}
    </div>
  );
}
