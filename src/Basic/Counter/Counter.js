import React,{useState} from 'react'

export default function Counter()
{ const [count, setcount] = useState(0)
function incre(){
    if(count===10) return;
    setcount(count+1);
}
function decre(){
    if(count===0) return
    setcount(count-1)
}
    
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>incre()}>Increament</button> 
      <br/>
      <button onClick={()=>decre()}>Decreament</button>
    </>
  )
}
