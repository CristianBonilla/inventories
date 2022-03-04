import { createAction, props } from '@ngrx/store';
import { UserResponse } from '@modules/auth/models/auth';

export enum UsersActions {
  GET_USERS = '[Users/Store] Get Users',
  FETCH_USERS = '[Users/API] Fetch Users',
  FETCH_USERS_SUCCESS = '[Users/API] Fetch Users Success',
  FETCH_USERS_FAILURE = '[Users/API] Fetch Users Failure'
}

export const getActionUsers = createAction(UsersActions.GET_USERS);
export const fetchActionUsers = createAction(UsersActions.FETCH_USERS);
export const fetchActionUsersSuccess = createAction(
  UsersActions.FETCH_USERS_SUCCESS,
  props<{ data: UserResponse[] }>()
);
export const fetchActionUsersFailure = createAction(
  UsersActions.FETCH_USERS_FAILURE,
  props<{ error: any }>()
);
