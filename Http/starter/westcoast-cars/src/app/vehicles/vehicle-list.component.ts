import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from './vehicle.service';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private _router: Router, private _service: VehicleService) {}

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    this._service
      .getVehicles()
      .subscribe((vehicles) => (this.vehicles = vehicles));
  }

  onSelected(vehicle: Vehicle): void {
    this._router.navigate(['/detaljer', vehicle.id]);
  }
}
