import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';

const routes: Routes = [
  {
    path: '', component: FirstComponent
  },
  {
    path: 'first', component: FirstComponent
  },
  {
    path: '**', component: FirstComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }