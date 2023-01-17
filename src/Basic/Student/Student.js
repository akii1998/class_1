import React from 'react'


 class Student extends React.Component{
    constructor(props){
        super()
        this.state={
        n:props.name,
        r:props.id
        }
    }

    render(){
        return<>
            <h1>Your Name is-:{this.props.larr.name}</h1>
            <h1>Your Roll is -:{this.props.larr.id}</h1>
        </>
    }
}

export default Student;