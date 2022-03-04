import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, filter, map, Observable, Subscription, take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { DEFAULT_SCROLLBAR_OPTIONS, ScrollbarOptions } from '@models/scrollbar';
import { ErrorType, UserResponse } from '@modules/auth/models/auth';
import { UsersState } from '@modules/auth/users/store/reducers/users.reducer';
import { getActionUsers } from '@modules/auth/users/store/actions/users.actions';
import { getError, getUserAmount, getUsers, isLoading } from '@modules/auth/users/store/selectors/users.selectors';

@Component({
  selector: 'mi-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  readonly scrollbarOptions: ScrollbarOptions = {
    ...DEFAULT_SCROLLBAR_OPTIONS,
    overflowBehavior: {
      y: 'visible-hidden'
    }
  };
  loading$!: Observable<boolean>;
  users$!: Observable<UserResponse[] | null>;
  failedSubscriptions: Subscription[] = [];
  errorType$!: Observable<ErrorType>;

  constructor(private store: Store<UsersState>, private toastr: ToastrService) { }

  ngOnInit() {
    this.loading$ = this.store.select(isLoading);
    this.users$ = this.store.select(getUsers);
    this.errorType$ = this.store.select(getError).pipe(
      filter(error => !!error),
      map(({ errorType }) => errorType)
    );
    this.store.dispatch(getActionUsers());
    this.loadSuccess();
    this.onErrors();
  }

  private loadSuccess() {
    this.store.select(getUserAmount).pipe(
      filter(amount => !!amount),
      take(1)
    ).subscribe(amount => {
      this.toastr.success(`${ amount } en total`, 'Se cargaron los usuarios');
    });
  }

  private onErrors() {
    const subscription = this.store.select(getError).pipe(
      distinctUntilChanged(),
      filter(error => !!error)
    ).subscribe(error => {
      this.onMessages(error.errorType);
    });
    this.failedSubscriptions.push(subscription);
  }

  private onMessages(errorType: ErrorType) {
    switch (errorType) {
      case ErrorType.NoUsers:
        this.toastr.info('', 'No hay usuarios registrados');
        break;
      default:
        this.toastr.error('Inténtalo de nuevo más tarde', 'Se produjo un error');
        break;
    }
  }
}
