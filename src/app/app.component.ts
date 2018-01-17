import {Component, Inject} from '@angular/core';
import {AppStore} from '../state/app.store';
import {Store} from 'redux';
import {AppState} from '../state/app.state';
import * as TodoActions from '../state/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  todos: String[] = [];

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.todos = state.todos;
  }

  add(messageInput: HTMLInputElement) {
    console.log(messageInput.value);
    this.store.dispatch(TodoActions.add(messageInput.value));
  }
}
