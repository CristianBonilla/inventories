import { ActionReducer } from '@ngrx/store';

export const CLEAR_STATE = '[App/Meta] Clear state';

export function clearState(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => reducer(action.type === CLEAR_STATE ? undefined : state, action);
}
