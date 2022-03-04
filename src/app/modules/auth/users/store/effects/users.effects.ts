import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, delay, EMPTY, filter, map, mergeMap, of, switchMap, take, zip } from 'rxjs';
import { ErrorType } from '@modules/auth/models/auth';
import {
  fetchActionUsers,
  fetchActionUsersFailure,
  fetchActionUsersSuccess,
  getActionUsers
} from '@modules/auth/users/store/actions/users.actions';
import { UsersState } from '@modules/auth/users/store/reducers/users.reducer';
import { usersRootSelector } from '@modules/auth/users/store/selectors/users.selectors';
import { UsersService } from '@modules/auth/users/services/users/users.service';

export const DEFAULT_WAIT = 3000;

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(getActionUsers),
    mergeMap(props => zip(
      this.store.select(usersRootSelector).pipe(take(1)),
      of(props)
    )),
    filter(([ state ]) => !state.loading),
    mergeMap(([ { users, hasRequestedUsers, error } ]) => {
      if (!hasRequestedUsers || !users && !!error) {
        return of(fetchActionUsers());
      }
      if (!!users && !users.length) {
        return of(fetchActionUsersFailure({
          error: {
            errorType: ErrorType.NoUsers
          }
        }));
      }

      return EMPTY;
    })
  ));

  fetchUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fetchActionUsers),
    switchMap(_ => {
      const users$ = this.service.fetchUsers().pipe(
        delay(DEFAULT_WAIT),
        map(data => fetchActionUsersSuccess({ data })),
        catchError(httpError => {
          const error = httpError.error ?? httpError;

          return of(fetchActionUsersFailure({
            error: {
              ...error,
              errorType: ErrorType.Failed
            }
          }));
        })
      );

      return users$;
    })
  ));

  constructor(
    private actions$: Actions,
    private store: Store<UsersState>,
    private service: UsersService
  ) { }
}
