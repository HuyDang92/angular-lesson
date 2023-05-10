import { Lesson4Component } from './components/lesson4/lesson4.component';
import { Lesson3Component } from './components/lesson3/lesson3.component';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'bai1', component: Lesson2Component },
  { path: 'bai2', component: Lesson3Component },
  { path: 'bai3', component: Lesson4Component },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
