import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './add/customer-add.component';
import { CustomerListComponent } from './list/customer-list.component';
import { CustomerModifyComponent } from './modify/customer-modify.component';
import { CustomerViewComponent } from './view/customer-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./list/customer-list.module').then(m => m.CustomerListModule),
    component: CustomerListComponent
  },
  {
    path: 'add',
    loadChildren: () => import('./add/customer-add.module').then(m => m.CustomerAddModule),
    component: CustomerAddComponent
  },
  {
    path: 'view/:customerId',
    loadChildren: () => import('./view/customer-view.module').then(m => m.CustomerViewModule),
    component: CustomerViewComponent
  },
  {
    path: 'modify/:customerId',
    loadChildren: () => import('./modify/customer-modify.module').then(m => m.CustomerModifyModule),
    component: CustomerModifyComponent
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
