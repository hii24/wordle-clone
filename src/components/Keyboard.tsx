import React from "react";
import type { LetterStatus } from "../utils/checkGuess";

const ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

interface KeyboardProps {
  letterStatus: Record<string, LetterStatus>;
  onKey: (key: string) => void;
}

export function Keyboard({ letterStatus, onKey }: KeyboardProps) {
  return (
    <div className="keyboard">
      {ROWS.map((row, ri) => (
        <div key={ri} className="keyboard-row">
          {ri === 2 && (
            <button className="key key--wide" onClick={() => onKey("ENTER")}>Enter</button>
          )}
          {row.split("").map((ch) => (
            <button
              key={ch}
              className={`key key--${letterStatus[ch] ?? "empty"}`}
              onClick={() => onKey(ch)}
            >
              {ch}
            </button>
          ))}
          {ri === 2 && (
            <button className="key key--wide" onClick={() => onKey("BACKSPACE")}>⌫</button>
          )}
        </div>
      ))}
    </div>
  );
}
