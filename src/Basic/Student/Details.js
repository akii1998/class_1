import React from 'react'
import { useEffect } from 'react'

export default function Details(prop) {
    console.log(prop)
    // useEffect(() => {
    // console.log(prop)
    // }, [])
    // const na =prop.name;
    // const av =prop.id;
    // const child =prop.children;
    // const {name,id,children}=prop
    // console.log(props)
    // console.log(prop)
  return (
    <div>
    <>
     <h1>Student name -:{prop.larr.name}</h1>   
     <h1>Student id -:{prop.larr.id}</h1>  
     {/* <p>children-:{prop.children} </p>  */}
    </>
    </div>
  )
}
