import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/util';

const url = 'api/employees/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  constructor(private http: ApiService) { }

  getEmployees(): Observable<any> {
    return this.http.get(url);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(url + id);
  }

  create(employee: any): Observable<any> {
    return this.http.post(url, employee);
  }

  update(employee: any): Observable<any> {
    return this.http.put(url, employee);
  }

  delete(id: number) {
    return this.http.delete(url + id);
  }
}
