import { ActionReducer } from '@ngrx/store';
import { UsersState, reducer as usersReducer } from '@modules/auth/users/store/reducers/users.reducer';

export const usersFeatureKey = 'users';

export const reducer: ActionReducer<UsersState> = usersReducer;
