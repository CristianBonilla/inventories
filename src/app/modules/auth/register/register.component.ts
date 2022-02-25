import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { passwordMatchValidator } from '@helpers/validators/password.validator';
import { onlyNumbers } from '@helpers/validators/formats.validator';
import { patternValidator } from '@helpers/validators/custom.validator';

@Component({
  selector: 'mi-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent {
  private readonly controlOptions: AbstractControlOptions = {
    validators: [passwordMatchValidator]
  };
  private readonly loadingSubject = new BehaviorSubject(false);
  readonly loading$ = this.loadingSubject.asObservable();

  @Output()
  loading = new EventEmitter<boolean>(false);

  readonly registerForm = this.formBuilder.group({
    username: [null],
    firstName: [null],
    lastName: [null],
    DNI: [null],
    password: [null],
    confirmPassword: [null]
  }, this.controlOptions);

  get username() {
    return this.registerForm.get('username') as FormControl;
  }

  get firstName() {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.registerForm.get('lastName') as FormControl;
  }

  get DNI() {
    return this.registerForm.get('DNI') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  constructor(private formBuilder: FormBuilder) {
    this.username.setValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]);
    this.firstName.setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]);
    this.lastName.setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]);
    this.DNI.setValidators([
      Validators.required,
      Validators.minLength(3),
      onlyNumbers
    ]);
    this.password.setValidators([
      Validators.required,
      patternValidator(/[A-Z]/, { hasCapitalCase: true }),
      patternValidator(/[a-z]/, { hasSmallCase: true }),
      // check whether the entered password has a lower and upper case letter
      // check whether the entered password has a special character
      patternValidator(/[ £`~!¡¿@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true }),
      Validators.minLength(10)
    ]);
    this.confirmPassword.setValidators([ Validators.required ]);
  }

  register() {
    this.setLoading(true);
  }

  private setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
    this.loading.emit(loading);
  }
}
