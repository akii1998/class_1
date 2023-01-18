import React from 'react'
import ErrorOccurs from './ErrorOccurs'
import { OneFile } from './OneFile'
import SecondFile from './SecondFile'

const DisplayOnScreen = () => {
  return (
    <>
    <ErrorOccurs>
        <OneFile/>
    </ErrorOccurs>
    <ErrorOccurs>
        <SecondFile/>
    </ErrorOccurs>
    <ErrorOccurs>
        <OneFile/>
        <SecondFile/>
    </ErrorOccurs>
   <ErrorOccurs>
    <SecondFile/>
    <OneFile/>
   </ErrorOccurs>

    </>
  )
}

export default DisplayOnScreen