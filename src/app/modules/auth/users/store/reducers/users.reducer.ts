import { UserResponse } from '@modules/auth/models/auth';
import { Action, createReducer, on } from '@ngrx/store';
import {
  fetchActionUsers,
  fetchActionUsersFailure,
  fetchActionUsersSuccess
} from '@modules/auth/users/store/actions/users.actions';

export interface UsersState {
  users: UserResponse[] | null;
  hasRequestedUsers: boolean;
  error: any;
  loading: boolean;
}

const initialState: UsersState = {
  users: null,
  hasRequestedUsers: false,
  error: null,
  loading: false
};

const usersReducer = createReducer(
  initialState,
  on(fetchActionUsers, state => ({
    ...state,
    loading: true,
    hasRequestedUsers: true
  })),
  on(fetchActionUsersSuccess, (state, { data }) => ({
    ...state,
    users: data?.data ?? [],
    loading: false
  })),
  on(fetchActionUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
