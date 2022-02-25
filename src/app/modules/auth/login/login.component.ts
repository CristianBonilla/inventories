import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mi-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  private readonly loadingSubject = new BehaviorSubject(false);
  readonly loading$ = this.loadingSubject.asObservable();

  @Output()
  loading = new EventEmitter<boolean>(false);

  readonly loginForm = this.formBuilder.group({
    usernameOrEmail: [null],
    password: [null]
  });

  get usernameOrEmail() {
    return this.loginForm.get('usernameOrEmail') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private formBuilder: FormBuilder) {
    this.usernameOrEmail.setValidators([Validators.required]);
    this.password.setValidators([Validators.required]);
  }

  login() {
    this.setLoading(true);
  }

  private setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
    this.loading.emit(loading);
  }
}
