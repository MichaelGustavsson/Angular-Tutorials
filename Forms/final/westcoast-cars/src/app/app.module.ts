import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { VehicleListComponent } from './vehicles/vehicle-list.component';
import { VehicleDetailsComponent } from './vehicles/vehicle-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VehicleAddComponent } from './vehicles/vehicle-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VehicleListComponent,
    VehicleDetailsComponent,
    HomeComponent,
    PageNotFoundComponent,
    VehicleAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
