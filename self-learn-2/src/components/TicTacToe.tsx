import React, { useState } from 'react';

type Player = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');

  const handleCellClick = (index: number) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    setBoard(updatedBoard);

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const renderCell = (index: number) => (
    <div className="cell" onClick={() => handleCellClick(index)}>
      {board[index]}
    </div>
  );

  const winner = calculateWinner(board);

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((_, index) => renderCell(index))}
      </div>
      {winner && <div className="winner">Winner: {winner}</div>}
    </div>
  );
};

const calculateWinner = (board: Player[]): Player | null => {
  const winningPositions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const positions of winningPositions) {
    const [a, b, c] = positions;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null; // No winner
};

export default TicTacToe;