import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../../../shared/models/employee';
import { EmployeeHttpService } from '../../../services/employee-http.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  private httpSubscription: Subscription;
  public employees: Employee[] = [];

  constructor(private employeeHttpService: EmployeeHttpService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.httpSubscription = this.employeeHttpService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      }
    );
  }

  ngOnDestroy() {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }

}
