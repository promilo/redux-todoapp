import { ADD_TASK, DELETE_TASK } from '../constants';

export const addReminder = (text) => {
  const action = {
    type: ADD_TASK,
    text
  }
  console.log('action in add task', action)
  return action
}

export const deleteTask = id => {
  const action = {
    type: DELETE_TASK,
    id
  }

  console.log("delete task", action)
  return action
}
