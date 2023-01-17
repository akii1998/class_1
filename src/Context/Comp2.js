import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { lname ,fname } from '../App'
const Comp2 = () => {
    const myName =useContext(fname)
    const myLast =useContext(lname)
  return (
    <div><h1>Component 2</h1>
     <h6>my name is {myName} and {myLast}</h6>
    <Comp3/>
   
    </div>
  )

}
export default Comp2
