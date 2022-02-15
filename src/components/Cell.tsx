import React from "react";
import type { LetterStatus } from "../utils/checkGuess";

interface CellProps {
  letter: string;
  status: LetterStatus;
}

export function Cell({ letter, status }: CellProps) {
  return (
    <div className={`cell cell--${status}`} aria-label={letter || "empty"}>
      {letter}
    </div>
  );
}
