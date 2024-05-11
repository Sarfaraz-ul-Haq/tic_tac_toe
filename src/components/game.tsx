"use client";

import Board from "./board";
import { useState } from "react";

type History = (string | null)[][];

function Game() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<History>([Array(9).fill(null)]);
  // const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: (string | null)[]) => {
    setHistory([...history, nextSquares]);
    // setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

export default Game;
