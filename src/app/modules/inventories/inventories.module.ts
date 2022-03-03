import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoriesRoutingModule } from '@modules/inventories/inventories-routing.module';

import { InventoriesComponent } from '@modules/inventories/inventories.component';

@NgModule({
  declarations: [InventoriesComponent],
  imports: [
    CommonModule,
    InventoriesRoutingModule
  ]
})
export class InventoriesModule { }
