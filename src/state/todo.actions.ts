import { ActionCreator } from 'redux';
import {AddTodoAction} from './add-todo.action';

export const ADD = 'ADD';
export const add: ActionCreator<AddTodoAction> = (message: string) => ({ // arrow function with quick object return
  type: ADD,
  message: message
});
