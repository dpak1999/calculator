import React from "react";

export default class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
      b: 0,
      result: 0
    }
  }

  handleA=(event)=>{
    this.setState({
      a: event.target.value
    })
  }

  handleB=(event)=>{
    this.setState({
      b: event.target.value
    })
  }

  findSum=()=>{
    this.setState({
      sum: parseInt(this.state.a) + parseInt(this.state.b)
    })
  }

  findDifference=()=>{
    this.setState({
      sum: parseInt(this.state.a) - parseInt(this.state.b)
    })
  }

  findProduct=()=>{
    this.setState({
      sum: parseInt(this.state.a) * parseInt(this.state.b)
    })
  }

  render() {
    return(
    <div style={{
      backgroundColor:"#f2f2f2",
      width: 200,
      padding: 20,
      borderRadius: 20,
      textAlign: "center",
      margin: "auto"
    }}>
      <h1>Calculator</h1>
      <input type="number" onChange={this.handleA} />
      <input type="number" onChange={this.handleB} />
      <br />
      <button onClick={this.findSum}>
        Sum
      </button>
      <button onClick={this.findDifference}>
        Difference
      </button>
      <button onClick={this.findProduct}>
        Product
      </button>
      <br />
      value of a: {this.state.a}
      <br />
      value of b: {this.state.b}
      <br />
      sum :{this.state.sum}
    </div>
    )
  }
}