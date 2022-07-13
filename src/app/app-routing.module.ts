import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCarComponent} from './car/list-car/list-car.component';
import {CreateCarComponent} from './car/create-car/create-car.component';
import {DeleteCarComponent} from './car/delete-car/delete-car.component';
import {MaxCarComponent} from './car/max-car/max-car.component';
import {EditCarComponent} from './car/edit-car/edit-car.component';

const routes: Routes = [
  {
    path: '',
    component: ListCarComponent
  },
  {
    path: 'create',
    component: CreateCarComponent
  },
  {
    path: 'edit/:id',
    component: EditCarComponent
  },
  {
    path: 'delete/:id',
    component: DeleteCarComponent
  },
  {
    path: 'search',
    component: MaxCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
