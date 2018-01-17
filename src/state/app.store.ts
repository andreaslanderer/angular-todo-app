import {InjectionToken} from '@angular/core';
import {compose, createStore, Store, StoreEnhancer} from 'redux';
import {AppState} from './app.state';
import {todoReducer} from './todo.reducer';

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState>(todoReducer, compose(devtools));
}

export const appSoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
];
