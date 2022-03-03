import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'inventories',
        loadChildren: () => import('@modules/inventories/inventories.module')
          .then(module => module.InventoriesModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('@modules/sales/sales.module')
          .then(module => module.SalesModule)
      },
      {
        path: 'shopping',
        loadChildren: () => import('@modules/shopping/shopping.module')
          .then(module => module.ShoppingModule)
      },
      {
        path: 'users',
        loadChildren: () => import('@modules/auth/users/users.module')
          .then(module => module.UsersModule)
      },
      {
        path: 'articles',
        loadChildren:  () => import('@modules/articles/articles.module')
          .then(module => module.ArticlesModule)
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'prefix'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
