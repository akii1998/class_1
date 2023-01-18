import React, { Component } from 'react';

class ErrorOccurs extends Component {
    state={
        ErrorIs:false,
    }
    getDerivedStateFromError(error){
        return({
            ErrorIs:true
        })
    }
    componentDidCatch(error,info){
        console.log("error",error);
        console.log("Info",info);
    }
    render() {
        return (
       <>
        {(this.state.ErrorIs)? <h1>Oops! Something is Wrong</h1>: this.children.props}
       </>

        );
    }
}

export default ErrorOccurs;