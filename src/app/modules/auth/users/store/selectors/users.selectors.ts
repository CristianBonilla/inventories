import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeatureKey } from '@modules/auth/users/store';
import { UsersState } from '@modules/auth/users/store/reducers/users.reducer';

export const usersRootSelector = createFeatureSelector<UsersState>(usersFeatureKey);

export const getUsers = createSelector(usersRootSelector, state => state.users);

export const getError = createSelector(usersRootSelector, state => state.error);

export const isLoading = createSelector(usersRootSelector, state => state.loading);

export const getUserById = (userId: number) => createSelector(
  isLoading,
  getUsers,
  (loading, users) => !loading ? users?.find(({ id }) => id === userId) : null
);

export const getUserAmount = createSelector(
  isLoading,
  getUsers,
  (loading, users) => !loading && !!users?.length ? users.length : null
);
