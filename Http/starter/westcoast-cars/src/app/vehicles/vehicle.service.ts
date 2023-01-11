import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VEHICLES } from '../data/mock-vehicles';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor() {}

  // Asynkront anrop
  getVehicles(): Observable<Vehicle[]> {
    const vehicles = of(VEHICLES);
    return vehicles;
  }

  getVehicle(id: number): Observable<Vehicle> {
    const vehicle = VEHICLES.find((v) => v.id === id)!;
    return of(vehicle);
  }

  // Synkront anrop
  // getVehicles(): Vehicle[] {
  //   return VEHICLES;
  // }
}
