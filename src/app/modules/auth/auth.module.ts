import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '@modules/auth/auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { DirectivesModule } from '@directives/directives.module';
import { IconsModule } from '@shared/icons/icons.module';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

import { AuthComponent } from '@modules/auth/auth.component';
import { LoginComponent } from '@modules/auth/login/login.component';
import { RegisterComponent } from '@modules/auth/register/register.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgxTrimDirectiveModule,
    DirectivesModule,
    IconsModule,
    OverlayscrollbarsModule
  ]
})
export class AuthModule { }
