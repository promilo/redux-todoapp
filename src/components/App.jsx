import React, { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className = "App">
        <div className="title">
          To do list
        </div>
        <div className = "form-inline">
          <div classNmae = "form-group">
            <input className = "form-control"
              placeholder ="I have"
              />
          </div>
          <button
            type ="button"
            className ="btn btn-primary"
            >
            Add a task
          </button>
        </div>
      </div>
    )
  }
}

export default App;
