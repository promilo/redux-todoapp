import { ADD_TASK } from '../constants';

export const addReminder = (text) => {
  const action = {
    type: ADD_TASK,
    text
  }
  console.log('action in add task', action)
  return action
}
