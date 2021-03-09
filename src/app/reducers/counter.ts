import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";

export const COUNT_KEY = 'counter';

export const plus = createAction('[COUNT] plus');
export const minus = createAction('[COUNT] minus');
export const clear = createAction('[COUNT] clear');
export const changeUpdatedAt = createAction('[COUNT] change updated at',
  props<{ updatedAt: number }>()
);

export interface CountState {
  count: number;
  updatedAt?: number;
}

export const initialState: CountState = {
  count: 0
}

export const countReducer = createReducer(
  initialState,
  on(plus, state => ({
    ...state,
    count: state.count + 1
  })),
  on(minus, state => ({
    ...state,
    count: state.count - 1
  })),
  on(clear, state => ({
    ...state,
    count: 0
  })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  }))
)


export const featureSelector = createFeatureSelector<CountState>(COUNT_KEY);

export const countSelector = createSelector(featureSelector,
  state => state.count
);
export const updatedAtSelector = createSelector(featureSelector,
state => state.updatedAt
  );
