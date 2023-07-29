import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MohzService {

  private baseUrl = 'http://localhost:8080/mohz/mohzs';

  constructor(private http: HttpClient) { }

  getMohz(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMohz(mohz: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, mohz);
  }

  updateMohz(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMohz(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMohzsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
