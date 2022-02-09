import React from "react";
import Square from "../Square";

function Board ({board, move}) {
return (
   board.map((square, index) => {
    return <Square key={index} move={move} />
   })
)}





export default Board;