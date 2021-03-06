import './App.css';
import {useState, useEffect} from 'react';
import Board from '../Board';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
 
  
  function playerTurn () {
    if (xTurn === true) {
      setXTurn(!xTurn)
      return "❌";
    } else {
      setXTurn(!xTurn)
      return "⭕";
    }
  }

  function playerMove (index) {
    if (board[index] === null) {
        setBoard([...board.slice(0, index), playerTurn(), ...board.slice(0,index + 1)]);
        checkFinish();
        
    } else {
      alert("You can't make that move");
    } 
  }
  
  function checkFinish (board) {
    //if all positions on board are X or O, call it a draw
      //see if there's any nulls remaining,
        //draw, unless last move was a winning move

    //if winning combos are found in board for either X or O, declare winner
    const winning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]
for (let i = 0; i < winning.length; i++) {
  const [a, b, c] = winning[i];
  if (board[a] && board[a] === board[b] && board[a] === board[c]) {
    return board[a];
  }
}
return null;
}

  return (
    <div className="App">
      <Board board={board}/>
    </div>
  );
}

export default App;

//is square empty? true = X or 0, false = alert: pick another square
//is there a winner yet? check board state against a set of winning states
//if there's a match, someone wins! if not, game continues.