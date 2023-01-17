import React, { Component } from 'react'

export default class ErrorHandling extends Component {
state={
    Erroris: false
}

    static getDerivedStateFromError(error){
    return( { Erroris: true})
    }
    componentDidCatch(error,info){
        console.log(`error  is `, error);
        console.log(`Information  is  `, info);
    }

  render() {
    return (
      <> 
      {(this.state.Erroris)? <h5>Opps! something is Wrong</h5> : this.props.children}
      </>
    )
  }
}
