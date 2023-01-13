import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VehicleAddComponent } from './vehicles/vehicle-add.component';
import { VehicleDetailsComponent } from './vehicles/vehicle-details.component';
import { VehicleListComponent } from './vehicles/vehicle-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: HomeComponent },
  { path: 'fordon', component: VehicleListComponent },
  { path: 'detaljer/:id', component: VehicleDetailsComponent },
  { path: 'vehicle/add', component: VehicleAddComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
