import React from "react";
import Square from "../Square";

function Board ({board, move}) {
return (
   board.map((_, index) => {
    return (<div>
      <Square key={index} move={move} />
    </div>)
   })
)}


export default Board;