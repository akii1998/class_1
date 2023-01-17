import React from 'react'

const Squares = (props) => {
  return (
    <>
    <span className='tic-tac' onClick={props.onClick}>
       {props.game}
    </span>
    </>
  )
}

export default Squares