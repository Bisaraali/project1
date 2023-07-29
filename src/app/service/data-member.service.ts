import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataMemberService {

  private baseUrl = 'http://localhost:8080/datamember/datamembers';

  constructor(private http: HttpClient) { }

  getDataMember(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDataMember(datamember: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, datamember);
  }

  updateDataMember(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDataMember(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDataMembersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
