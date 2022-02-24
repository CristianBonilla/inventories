import { Component } from '@angular/core';
import { SIDEBAR_ROUTES } from '@models/routes';
import { DEFAULT_SCROLLBAR_OPTIONS, ScrollbarOptions } from '@models/scrollbar';

@Component({
  selector: 'mi-sidebar-wrapper',
  templateUrl: './sidebar-wrapper.component.html',
  styles: []
})
export class SidebarWrapperComponent {
  readonly scrollbarOptions: ScrollbarOptions = {
    ...DEFAULT_SCROLLBAR_OPTIONS,
    overflowBehavior: {
      x: 'visible-hidden'
    }
  };
  readonly ROUTES = SIDEBAR_ROUTES;
}
