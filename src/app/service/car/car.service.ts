import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../../model/car';
import {Producer} from '../../model/producer';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${API_URL}/cars`);
  }
  create(data): Observable<Car> {
    return this.http.post(`${API_URL}/cars`, data);
  }
  update(id, data): Observable<Car> {
    return this.http.put(`${API_URL}/cars/${id}`, data);
  }
  findById(id): Observable<Car> {
    return this.http.get<Car>(`${API_URL}/cars/${id}`);
  }
  delete(id): Observable<Car> {
    return this.http.delete(`${API_URL}/cars/${id}`);
  }
  search(): Observable<Car[]> {
    return this.http.get<Car[]>(`${API_URL}/cars/price`);
  }
}
