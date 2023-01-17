import React from 'react'
import Fun from './FunBuildPro'

export default function FunProp(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h4>{props.roll}</h4>
    </div>
  )
}
