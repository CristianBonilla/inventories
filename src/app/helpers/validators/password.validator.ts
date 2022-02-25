import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');
    const password = passwordControl?.value ?? null;
    const confirmPassword = confirmPasswordControl?.value ?? null;

    if (!!confirmPassword && password !== confirmPassword) {
      confirmPasswordControl?.setErrors({ noPasswordMatch: true });

      return { noPasswordMatch: true };
    } else if (!!confirmPassword && password === confirmPassword) {
      confirmPasswordControl?.setErrors(null);

      return null;
    }
    confirmPasswordControl?.setErrors({ required: true });

    return { required: true };
  };
}
