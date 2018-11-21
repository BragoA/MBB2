import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { OneComponent } from './one/one.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {path: 'products', component: AllComponent},
  {path: 'product/create', component: AddComponent},
  {path: 'product/:customId', component: OneComponent},
  {path: 'product/update/:customId', component: UpdateComponent},
  {path: '', pathMatch: 'full', redirectTo: '/products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
