import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent implements OnInit {
  vehicle?: Vehicle;

  constructor(
    private _route: ActivatedRoute,
    private _service: VehicleService
  ) {}

  ngOnInit(): void {
    this.getVehicle();
  }

  getVehicle() {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._service
      .getVehicle(id)
      .subscribe((vehicle) => (this.vehicle = vehicle));
  }
}
