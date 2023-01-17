import React from 'react' 

export default class ImpureComponent extends React.Component {
	constructor() {
	super();
	this.state = {
	      counter: 0
	    }
	
	    // The value of Counter is updated to same value during continues interval
	
	setInterval(() => {
	this.setState({
	        counter: 0
	      });
	    }, 1000);
	  }
	
	render() {
	    return <b>Counter Value: {this.state.counter}</b>
	  }
	}
