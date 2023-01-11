import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VEHICLES } from '../data/mock-vehicles';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent {
  vehicles = VEHICLES;

  constructor(private _router: Router) {}

  onSelected(vehicle: Vehicle): void {
    this._router.navigate(['/detaljer', vehicle.id]);
  }
}
