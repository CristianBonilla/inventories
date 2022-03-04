import { createAction, props } from '@ngrx/store';
import { UserResponse } from '@modules/auth/models/auth';

export enum UsersActions {
  GET_USERS = '[Users/Store] Get Users',
  FETCH_USERS = '[Users/API] Fetch Users',
  FETCH_USERS_SUCCESS = '[Users/API] Fetch Users Success',
  FETCH_USERS_FAILURE = '[Users/API] Fetch Users Failure'
}

export const getUsers = createAction(UsersActions.GET_USERS);
export const fetchUsers = createAction(UsersActions.FETCH_USERS);
export const fetchUsersSuccess = createAction(
  UsersActions.FETCH_USERS_SUCCESS,
  props<{ data: UserResponse[] }>()
);
export const fetchUsersFailure = createAction(
  UsersActions.FETCH_USERS_FAILURE,
  props<{ error: any }>()
);
