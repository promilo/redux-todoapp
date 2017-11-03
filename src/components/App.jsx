import React, { Component } from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }


  addTask() {
    console.log('this.state', this.state) // to double check if the button is working
  }


  render(){
    return (
      <div className = "App">
        <div className="title">
          To do list
        </div>
        <div className = "form-inline">
          <div className = "form-group">
            <input className = "form-control"
              placeholder ="I have"
              onChange={(event) =>{
                 this.setState({text:event.target.value})
                }
               }
              />
          </div>
          <button
            type ="button"
            className ="btn btn-primary"
            onClick={() => this.addTask()}
            >
            Add a task
          </button>
        </div>
      </div>
    )
  }
}

export default App;
