import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../../../shared/models/employee';
import { EmployeeHttpService } from '../../../services/employee-http.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
import { DeleteEmployeeDialogComponent } from '../delete-employee-dialog/delete-employee-dialog.component';

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
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEmployeeById(params['id']);
    });
  }

  openDialog(employee: Employee) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = 'auto';
    dialogConfig.width = '400px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = employee;

    this.dialog.open(EmployeeDialogComponent, dialogConfig);
  }

  openDeleteDialog(employee: Employee): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = 'auto';
    dialogConfig.width = 'auto';
    dialogConfig.disableClose = true;
    dialogConfig.data = employee;

    this.dialog.open(DeleteEmployeeDialogComponent, dialogConfig);
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
