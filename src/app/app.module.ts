import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson3Component } from './components/lesson3/lesson3.component';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { TableModule } from 'primeng/table';
import { Lesson4Component } from './components/lesson4/lesson4.component';
import { Lesson5Component } from './components/lesson5/lesson5.component';
@NgModule({
  declarations: [
    AppComponent,
    Lesson3Component,
    Lesson2Component,
    Lesson4Component,
    Lesson5Component,
  ],
  imports: [BrowserModule, AppRoutingModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
