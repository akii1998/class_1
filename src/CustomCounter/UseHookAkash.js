import React from 'react'
import UseAkash from './UseAkash'

  const UseHookAkash = () => {
    const [count ,ince , dece ,res]= UseAkash(0)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={ince}>Increment</button>
    <button onClick={dece}>Decrement</button>
    <button onClick={res}>Reset</button>
    </>

  )
}
export default UseHookAkash
