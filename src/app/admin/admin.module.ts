import { ManageProductComponent } from './manage-product/manage-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, ManageProductComponent, SigninComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AdminModule {}
