import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  // { path: 'bai1', component: Lesson2Component },
  // { path: 'bai2', component: Lesson3Component },
  // { path: 'bai3', component: Lesson4Component },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
