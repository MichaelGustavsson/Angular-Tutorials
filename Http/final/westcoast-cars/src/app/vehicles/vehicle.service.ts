import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as rxjs from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  url: string = 'http://localhost:3010/vehicles';
  constructor(private _http: HttpClient) {}

  getVehicles(): rxjs.Observable<Vehicle[]> {
    return this._http.get<Vehicle[]>(this.url);
  }

  getVehicle(id: number): rxjs.Observable<Vehicle> {
    return this._http.get<Vehicle>(`${this.url}/${id}`);
  }
}
