import React, { Component } from "react";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0
    }
  }

  handleClick =  () =>{
    this.setState({
      count : this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
        <p>go to bhosda</p>
        <p>{this.state.count}</p>
        <button onClick = {this.handleClick}>Click here</button>
      </div>
    );
  }
}
