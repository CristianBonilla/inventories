import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '@modules/home/home-routing.module';
import { IconsModule } from '@shared/icons/icons.module';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

import { ToggleSidebarDirective } from '@modules/home/directives/toggle-sidebar/toggle-sidebar.directive';
import { CollapseSidebarDirective } from '@modules/home/directives/collapse-sidebar/collapse-sidebar.directive';

import { HomeComponent } from '@modules/home/home.component';
import { FooterComponent } from '@modules/home/footer/footer.component';
import { NavbarComponent } from '@modules/home/navbar/navbar.component';
import { SidebarComponent } from '@modules/home/sidebar/sidebar.component';
import { SidebarWrapperComponent } from '@modules/home/sidebar/wrapper/sidebar-wrapper.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarWrapperComponent,
    ToggleSidebarDirective,
    CollapseSidebarDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconsModule,
    OverlayscrollbarsModule
  ]
})
export class HomeModule { }
