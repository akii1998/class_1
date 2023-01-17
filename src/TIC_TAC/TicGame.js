import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Squares from "./Squares";

const intialstate = ["", "", "", "", "", "", "", "", ""];
export const TicGame = () => {
  const [box, setBox] = useState(intialstate);
  const [Xchange, setChange] = useState(false);
 
 
  //filling the values 

  const onclickSetall = (index) => {
    let string = Array.from(box);
    string[index] = Xchange ? "X" : "0";
    setBox(string);
    setChange(!Xchange);
  };

  useEffect(()=>{
    const winner1 =winner()
    if(winner1){
        alert(`Winner of this game is ${winner1}`)
        setBox(intialstate)
    }
   
  },[box])
  const winner=()=>{
    const line =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i =0;i<line.length;i++){
        const[a,b,c]=line[i];
        if(box[a]&& box[a]===box[b] && box[a]===box[c]){
            return box[a];
        }

    }
    return null;
  }
  return (
    <div className="game-box">
      <div>
        <Squares game={box[0]} onClick={() => onclickSetall(0)} />
        <Squares game={box[1]} onClick={() => onclickSetall(1)} />
        <Squares game={box[2]} onClick={() => onclickSetall(2)}/>
      </div>
      <div>
        <Squares game={box[3]} onClick={() => onclickSetall(3)}/>
        <Squares game={box[4]} onClick={() => onclickSetall(4)} />
        <Squares game={box[5]} onClick={() => onclickSetall(5)} />
      </div>
      <div>
        <Squares game={box[6]} onClick={() => onclickSetall(6)}/>
        <Squares game={box[7]} onClick={() => onclickSetall(7)}/>
        <Squares game={box[8]} onClick={() => onclickSetall(8)}/>
      </div>
      <button style={{color:"black",backGroundColor:'White',fontSize:"34px"}} onClick={()=>setBox(intialstate)}>Clear</button>
    </div>
  );
};
