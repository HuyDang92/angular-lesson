import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      // { path: 'product', component: ManageProductComponent },
      { path: '', component: DashboardComponent },
    ],
  },
  { path: 'admin/add-product', component: ManageProductComponent },
  { path: 'admin/login', component: SigninComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
