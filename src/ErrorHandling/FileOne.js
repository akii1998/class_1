import React from 'react'

const FileOne = () => {
    let obj ={name:{
      id:{
        col:"454"
      }
    }}
  return (
    <>
    <h1>{obj.name.id}</h1>
    </>
  )
}

export default FileOne