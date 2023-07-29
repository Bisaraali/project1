import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  private baseUrl = 'http://localhost:8080/vaccination/vaccinations';

  constructor(private http: HttpClient) { }

  getVaccination(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createVaccination(vaccination: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, vaccination);
  }

  updateVaccination(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteVaccination(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getVaccinationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
