import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Children } from '../model/children';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  baseUrl = "http://localhost:8080/api/children/childrens"

  constructor(private http: HttpClient) { }

  getChildren(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createChildren(children: Children): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, children);
  }

  updateChildren(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteChildren(id: number): Observable<object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getChildrensList(): Observable<Children[]> {
    return this.http.get<Children[]>(`${this.baseUrl}`);
    
  }
}
