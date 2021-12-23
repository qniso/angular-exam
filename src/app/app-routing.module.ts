import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCatalogComponent } from './components/car-catalog/car-catalog.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: 'mainpage',
    component: MainPageComponent,
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent,
  },
  {
    path: 'car-catalog',
    component: CarCatalogComponent,
  },
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
