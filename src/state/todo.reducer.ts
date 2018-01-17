import { ADD } from './todo.actions';
import {AppState} from './app.state';
import {Action, Reducer} from 'redux';
import {AddTodoAction} from './add-todo.action';

const initialState: AppState = {
  todos: []
};

export const todoReducer: Reducer<AppState> = (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    case ADD:
      return {
        todos: state.todos.concat((<AddTodoAction> action).message)
      };
    default:
      return state;
  }
};
