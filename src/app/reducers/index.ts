import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {COUNT_KEY, countReducer, CountState} from "./counter";

export interface State {
  [COUNT_KEY]: CountState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNT_KEY]: countReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
