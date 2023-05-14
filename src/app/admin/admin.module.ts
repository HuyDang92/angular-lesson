import { ManageProductComponent } from './manage-product/manage-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SigninComponent } from './signin/signin.component';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [DashboardComponent, ManageProductComponent, SigninComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    FormsModule,
  ],
})
export class AdminModule {}
