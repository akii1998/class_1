import React from 'react'
import Comp2 from './Comp2'
import  useContextAkk from './UseCustmHook/useContextAkk'
import { fname ,lname } from '../App'


 const Comp1 = () => {
    const Name =useContextAkk(fname)
    const LName =useContextAkk(lname)
  return (
    <div><h1>Component 1</h1>
    <p>{Name}</p>
    <p>{LName}</p>
    <Comp2/></div>
  )
}
export default Comp1