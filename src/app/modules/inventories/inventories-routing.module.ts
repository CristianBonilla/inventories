import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoriesComponent } from '@modules/inventories/inventories.component';

const routes: Routes = [
  {
    path: '',
    component: InventoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoriesRoutingModule { }
