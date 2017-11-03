import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteTask } from '../actions';
import { bindActionCreators } from 'redux';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }



  addTask() {
    console.log('this.state', this) // to double check if the button is working
    this.props.addReminder(this.state.text)
  }

  deleteTask(id) {
    console.log('delete task', id);
    console.log('this. props delete task', this.props)
    this.props.deleteTask(id)
  }

  renderList() {
    const { list } = this.props;
    console.log("list ", list)
    return(
      <ul className ="list-group col-sm-4">
        {
          list.map(todo => {
            return (
              <li key={todo.id} className = "list-group-item">
                <div className = "list-item"> {todo.text} </div>
                <div
                  className = "list-item delete-button"
                  onClick={()=> this.deleteTask(todo.id)}>
                  &#x2715;

                </div>

              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    console.log("this.props", this.props)
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
        { this.renderList() }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addReminder, deleteTask}, dispatch);
}

function mapStateToProps(state){
  console.log("mapStatetoProps state", state);
  // it should return a plain object.
  return {
    "list": state
  }
}
//                without mapstate to props it will be null
export default connect(mapStateToProps, mapDispatchToProps)(App);
