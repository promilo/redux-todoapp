import { ADD_TASK } from '../constants';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random() //to have a specific id for every todo.
  }
}


const todolist = (state = [], action) => {
  let todos = null;
  console.log("todolist state -> ", state)
  switch(action.type) {
    case ADD_TASK:
      todos = [...state, reminder(action)] //spread copy the state.
      console.log("todos", todos)
      return todos
    default:
      return state

  }
}

export default todolist;
