import { Component } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css'],
})
export class VehicleAddComponent {
  vehicle: Vehicle = new Vehicle();

  constructor(private _service: VehicleService) {}

  onSave() {
    this._service
      .addVehicle(this.vehicle)
      .subscribe((data) => console.log(data));
  }
}
