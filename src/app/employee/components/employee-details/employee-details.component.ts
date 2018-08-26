import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../../../shared/models/employee';
import { EmployeeHttpService } from '../../../services/employee-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
  private httpSubscription: Subscription;
  public employee = new Employee();

  constructor(
    private employeeHttpService: EmployeeHttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEmployeeById(params['id']);
    });
  }

  getEmployeeById(id: number) {
    this.httpSubscription = this.employeeHttpService.getEmployee(id).subscribe(
      (data) => {
        this.employee = data;
      }
    );
  }

  ngOnDestroy() {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }

}
