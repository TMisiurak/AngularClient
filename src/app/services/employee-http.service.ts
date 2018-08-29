import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Employee } from '../shared/models/employee';

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

  create(employee: Employee): Observable<any> {
    return this.http.post(url, {
      firstName: employee.firstName,
      lastName: employee.lastName,
      dateOfBirth: employee.dateOfBirth,
      genderId: employee.genderId,
      positionId: employee.positionId
    });
  }

  update(employee: any): Observable<any> {
    return this.http.put(url, employee);
  }

  delete(id: number) {
    return this.http.delete(url + id);
  }
}
