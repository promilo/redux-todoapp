import { ADD_TASK, DELETE_TASK } from '../constants';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random() //to have a specific id for every todo.
  }
}

const removeTaskByID = (state = [], id) =>{
  const todos = state.filter(todo => {
    todo.id !== id;
  })
  console.log("removeTaskByID todos", todos)
  return todos
}


const todolist = (state = [], action) => {
  let todos = null;
  console.log("todolist state -> ", state)
  switch(action.type) {
    case ADD_TASK:
      todos = [...state, reminder(action)] //spread copy the state.
      console.log("todos", todos)
      return todos
    case DELETE_TASK:
      todos = removeTaskByID(state, action.id)
      // MAKE SURE YOU ALWAYS RETURN AFTER EVERY STATE
      return todos
    default:
      return state

  }
}





export default todolist;
