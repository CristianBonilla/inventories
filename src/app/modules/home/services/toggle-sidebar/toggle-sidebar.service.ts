import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToggleSidebar } from '@modules/home/models/toggle-sidebar';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {
  private readonly toggleSidebarSubject = new BehaviorSubject<ToggleSidebar>({
    $sidebar: null,
    $toggle: null
  });
  readonly toggleSidebar$ = this.toggleSidebarSubject.asObservable();

  addToggle($toggle: HTMLDivElement) {
    const toggleSidebar = this.toggleSidebarSubject.getValue();
    this.toggleSidebarSubject.next({ ...toggleSidebar, $toggle });
  }

  addSidebar($sidebar: HTMLDivElement) {
    const toggleSidebar = this.toggleSidebarSubject.getValue();
    this.toggleSidebarSubject.next({ ...toggleSidebar, $sidebar });
  }
}
