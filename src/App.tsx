import React, { useEffect, useState, useMemo } from "react";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { aggregateLetterStatus } from "./utils/checkGuess";
import { WORDS, getDailyAnswer } from "./data/words";
import "./App.css";

const MAX_ROWS = 6;
const COLS = 5;

export function App() {
  const answer = useMemo(() => getDailyAnswer(), []);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [error, setError] = useState("");

  const won = guesses.includes(answer);
  const lost = !won && guesses.length >= MAX_ROWS;
  const finished = won || lost;

  function handleKey(key: string) {
    if (finished) return;
    setError("");

    if (key === "ENTER") {
      if (current.length !== COLS) return setError("Word too short");
      if (!WORDS.includes(current)) return setError("Not in word list");
      setGuesses((g) => [...g, current]);
      setCurrent("");
    } else if (key === "BACKSPACE") {
      setCurrent((c) => c.slice(0, -1));
    } else if (/^[A-Z]$/.test(key) && current.length < COLS) {
      setCurrent((c) => c + key);
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Enter") handleKey("ENTER");
      else if (e.key === "Backspace") handleKey("BACKSPACE");
      else if (/^[a-z]$/i.test(e.key)) handleKey(e.key.toUpperCase());
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const letterStatus = aggregateLetterStatus(guesses, answer);

  return (
    <main className="app">
      <h1>🟩 Wordle</h1>

      <Board guesses={guesses} current={current} answer={answer} />

      {error && <div className="error">{error}</div>}

      {won && <div className="result win">Got it in {guesses.length}!</div>}
      {lost && <div className="result lose">The word was {answer}</div>}

      <Keyboard letterStatus={letterStatus} onKey={handleKey} />
    </main>
  );
}
