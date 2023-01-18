import React from 'react'
import ErrorHandling from './ErrorHandling'
import FileOne from './FileOne'
import FileTwo from './FileTwo'

const DisplayError = () => {
  return (
    <>
 {/* <ErrorHandling>
    <FileTwo/>
 </ErrorHandling> */}
  <ErrorHandling>
    <FileOne/>
 </ErrorHandling> 
 {/* <ErrorHandling>
 <FileTwo/>
    <FileOne/>
 </ErrorHandling>
 <ErrorHandling>
    <FileTwo/>
 </ErrorHandling> */}



    </>
  )
}
export default DisplayError
