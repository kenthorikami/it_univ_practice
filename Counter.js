import React, { Component } from 'react';

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  };

  discrement = () => {
    this.setState({count: this.state.count - 1})
  };


  render(){
    return(
      <div className="App">
        <p>Count : {this.state.count}</p>
        <button
          onClick={() => {this.increment()}
        }>
        +
        </button>

        <button
         onClick={() => {this.discrement()}
        }>
        -
        </button>
      </div>
    )
  }
}

export default Counter;
