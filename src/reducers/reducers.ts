import { Reducer, combineReducers } from 'redux';

import { EnthusiasmAction } from '../actions/actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/constants';

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

const initialState = {
  languageName: 'IonicAngular',
  enthusiasmLevel: 1,
};

export function enthusiasm(state: StoreState = initialState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}

// ROOT - CODE ABOVE SHOULD BE IN NEW FILE
export interface AppState{
  test?: StoreState;
}

export const rootReducer: Reducer<any> = combineReducers<any>(
  {
    test: enthusiasm,
  },
);

export default rootReducer;
