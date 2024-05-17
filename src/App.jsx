import { useState } from "react";
import Squar from "./components/Squar"

function Board() {
  const [squareValue ,setsquareValue] = useState(Array(9).fill(null))
  const [xIsNext ,setxIsNext] = useState(true)

const handleClick =(indexVal)=>{
  if (squareValue[indexVal]) {
    return;
  }
  const newSquareValue = squareValue.slice();
  if (xIsNext) {
    newSquareValue[indexVal] = "X";
  }else {
    newSquareValue[indexVal] = "O";
  }
  setsquareValue(newSquareValue);
  setxIsNext(!xIsNext);
}
  return (
    <>
      <div className="square-btn-area">
      <Squar handleClick={()=>handleClick(0)} value={squareValue[0] }/>
      <Squar handleClick={()=>handleClick(1)} value={squareValue[1] }/>
      <Squar handleClick={()=>handleClick(2)} value={squareValue[2] }/>
        
      </div>
      <div className="square-btn-area">
        <Squar handleClick={()=>handleClick(3)} value={squareValue[3] }/>
        <Squar handleClick={()=>handleClick(4)} value={squareValue[4] }/>
        <Squar handleClick={()=>handleClick(5)} value={squareValue[5] }/>

      </div>
      <div className="square-btn-area">
        <Squar handleClick={()=>handleClick(6)} value={squareValue[6] }/>
        <Squar handleClick={()=>handleClick(7)} value={squareValue[7] }/>
        <Squar handleClick={()=>handleClick(8)} value={squareValue[8] }/>

      </div>
    </>
  )
}

export default Board
