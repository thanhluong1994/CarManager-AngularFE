import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Producer} from '../../model/producer';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Producer[]> {
    return this.http.get<Producer[]>(`${API_URL}/cars/producers`);
  }
}
