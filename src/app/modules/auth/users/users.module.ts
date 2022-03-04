import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersRoutingModule } from '@modules/auth/users/users-routing.module';

import { UsersComponent } from '@modules/auth/users/users.component';

import { UsersEffects } from '@modules/auth/users/store/effects/users.effects';
import { usersFeatureKey } from '@modules/auth/users/store';
import { reducer as usersReducer } from '@modules/auth/users/store/reducers/users.reducer';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    UsersRoutingModule
  ]
})
export class UsersModule { }
