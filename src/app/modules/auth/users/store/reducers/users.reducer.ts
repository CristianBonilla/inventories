import { UserResponse } from '@modules/auth/models/auth';
import { Action, createReducer, on } from '@ngrx/store';
import {
  fetchUsers,
  fetchUsersFailure,
  fetchUsersSuccess
} from '@modules/auth/users/store/actions/users.actions';

export interface UsersState {
  users: UserResponse[] | null;
  hasRequestedUsers: boolean;
  error: any;
  loading: boolean;
}

export const initialState: UsersState = {
  users: null,
  hasRequestedUsers: false,
  error: null,
  loading: false
};

const usersReducer = createReducer(
  initialState,
  on(fetchUsers, state => ({
    ...state,
    loading: true,
    hasRequestedUsers: true
  })),
  on(fetchUsersSuccess, (state, { data: users }) => ({
    ...state,
    users,
    loading: false
  })),
  on(fetchUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
