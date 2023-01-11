import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VEHICLES } from '../data/mock-vehicles';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent implements OnInit {
  vehicle?: Vehicle;
  vehicles = VEHICLES;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getVehicle();
  }

  getVehicle() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehicle = this.vehicles.find((v) => v.id === id);
  }
}
