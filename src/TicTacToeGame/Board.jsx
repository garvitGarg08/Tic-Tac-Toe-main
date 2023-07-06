import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        const win=state[a]+" Won the Game"
        return win;
      }
    }

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
    if(!state.includes(null) && state[a] !== state[b] && state[a] !== state[c]) {
      return `Game Draw`;
    }
  }
    return false;
  };
  


  const isWinner = checkWinner();
  
  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <div className="board-win">
            <div className="top-text"> {isWinner} </div>
          
          <button onClick={handleReset} className="playbutton">PLAY AGAIN</button>
        </div>
      ) : (
        <div className="board">
        <div>
          <h4 className="top-text">Player {isXTurn ? "X" : "O"} Please move</h4>

          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
          </div>
          <h1 className="title">Tic Tac Toe Game</h1>
        </div>
      )}
    </div>
  );
};

export default Board;
