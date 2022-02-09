import React from "react";
import Square from "../Square";

function Board ({board,playerMove}) {
return (
   board.map((_, index) => {
    return (
    <div>
      <Square playerMove={playerMove} key={index} move={move} />
    </div>)
   })
)}


export default Board;