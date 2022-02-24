import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsDirective } from '@directives/form-errors/form-errors.directive';

@NgModule({
  declarations: [FormErrorsDirective],
  imports: [CommonModule],
  exports: [FormErrorsDirective]
})
export class DirectivesModule { }
