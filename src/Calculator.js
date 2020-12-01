import React, {Component} from 'react'

class Calculator extends Component {
    state = {
      num1:0,
      num2:0,
      result: 'Addition results go here!'
    }
    
    setNum = (e, num) =>{
      this.setState({
        [num]: parseInt(e.target.value)
      })
    }
    
    setResult = () =>{
      this.setState({
        result: this.state.num1 + this.state.num2,
        num1: 0,
        num2: 0
      })
    }
    
    render() {
        return (
          <div className="container">
            <h1>Add with React!</h1>
            <div className="add">
              <input type="number"
                name="num1"
                placeholder="Enter your first number"
                value={this.state.num1}
                onChange={(e)=> this.setNum(e,'num1')}
                />
              <span>+</span>
              <input type="number"
                name="num2"
                placeholder="Enter your second number"
                value={this.state.num2}
                onChange={(e)=> this.setNum(e,'num2')}
               />
              <button onClick={this.setResult}>=</button>
              <h3>{this.state.result}</h3>
            </div>
          </div>
        )
    }
}

export default Calculator