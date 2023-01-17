import { useState }  from 'react'

const UseAkash = (intial) => {
  const[count,setCount]=useState(intial)
  function ince(){
    setCount(count+1)
  }
  function dece(){
    setCount(count-1)
  }
  function res(){
    setCount(0)
  }
    return ( [count,ince,dece,res])
}

export default UseAkash