import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { VehicleListComponent } from './vehicles/vehicle-list.component';
import { VehicleDetailsComponent } from './vehicles/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VehicleListComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
