import React,{useState} from 'react'
export function HOCBlue(props){
    
    let k = Math.floor(Math.random()*257);
    let l = Math.floor(Math.random()*257);
    let m = Math.floor(Math.random()*257);
      return <h2   style={{ background:`rgb(${k},${l},${m})`}}><props.cmp/></h2>
   
    }
  
  
    export function Likes(){
      const [count,setCount]=useState(0);
   
      return(
          
          <>
          <h1>{count}</h1>
          <button onClick={()=>setCount(count+1) && Likes(HOCBlue()) } >increment</button>
          <button onClick={()=>(count>0)  && setCount(count-1)}>Decreament</button>
          </>
      )
    }