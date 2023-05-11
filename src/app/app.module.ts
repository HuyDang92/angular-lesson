import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { StarComponent } from './components/star/star.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductsComponent, StarComponent],
  imports: [BrowserModule, AppRoutingModule, TableModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
