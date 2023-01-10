import { Component } from '@angular/core';
import { VEHICLES } from '../data/mock-vehicles';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent {
  vehicles = VEHICLES;
  selectedVehicle?: Vehicle;

  onSelected(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }
}
