import React from 'react'
import { useState } from 'react'
import './TicTac.css'

export const TicTacGame = () => {
    const [ turn ,setTurn]=useState("X")
    const [update,Setupdate]=useState(Array(9).fill(''))
    const[winner ,setWinner]= useState()
    const handleClick =(num)=>{
        if(update[num]!== ''){
            alert('Already Click')
        }
        let sqaure =[...update]
     if(turn=== "X"){
        sqaure[num]='X'
        setTurn("0")
     }
     else{
        sqaure[num]='0'
        setTurn('X')
     }
    Winneris(sqaure)

     Setupdate(sqaure)
     console.log(sqaure);
    }
    const Winneris=(sqaure)=>{
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
                if(sqaure[a] && sqaure[a]===sqaure[b] && sqaure[a]===sqaure[c]){
                 setWinner(sqaure[a]);
                }
        
            }
            // return null;
          }


    const Cell =({num})=>{
        return <td onClick={()=>handleClick(num)}>{update[num]}</td>
    }
  return (
    <div className='center'>
    Turn : {turn}
     <table>
        <tbody>
            <tr>
                <Cell num={0} />
                <Cell num={1} />
                <Cell num={2} />
            </tr>
            <tr>
                <Cell num={3} />
                <Cell num={4} />
                <Cell num={5} />
            </tr>
            <tr>
                <Cell num={6} />
                <Cell num={7} />
                <Cell num={8} />
            </tr>
        </tbody>
     </table>
     <br/>
     <br/>
     {winner&&(<>
        <p>{winner} is Winner</p>
     </>)}
     <button className='button' >Clear </button>
    </div>
  )
}
