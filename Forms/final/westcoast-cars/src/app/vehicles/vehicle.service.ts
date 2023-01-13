import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  url: string = 'http://localhost:3010/vehicles';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this._http.get<Vehicle[]>(this.url);
  }

  getVehicle(id: number): Observable<Vehicle> {
    return this._http.get<Vehicle>(`${this.url}/${id}`);
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    // this._http.post(this.url, vehicle);
    return this._http.post<Vehicle>(this.url, vehicle, this.httpOptions);
  }
}
