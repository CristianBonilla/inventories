import { Component } from '@angular/core';
import { DEFAULT_SCROLLBAR_OPTIONS, ScrollbarOptions } from '@models/scrollbar';
import { AuthType } from '@modules/auth/models/auth';

@Component({
  selector: 'mi-auth',
  templateUrl: './auth.component.html',
  styles: []
})
export class AuthComponent {
  readonly scrollbarOptions: ScrollbarOptions = {
    ...DEFAULT_SCROLLBAR_OPTIONS,
    overflowBehavior: {
      x: 'visible-hidden'
    }
  };
  readonly authType = AuthType;
  auth = this.authType.Login;
  loading = false;

  constructor() { }
}
