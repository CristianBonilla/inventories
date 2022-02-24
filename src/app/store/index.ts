import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { clearState } from '@app/store/meta-reducers/clear.meta-reducer';

export interface AppState { }

export const reducers: ActionReducerMap<AppState> = { };

export const metaReducers: MetaReducer<AppState>[] = [
  clearState
];
