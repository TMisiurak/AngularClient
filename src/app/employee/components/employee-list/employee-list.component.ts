import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../../../shared/models/employee';
import { EmployeeHttpService } from '../../../services/employee-http.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
import { Position } from '../../../shared/models/position';
import { PositionHttpService } from '../../../services/position-http.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  private httpSubscription: Subscription;
  public employees: Employee[] = [];
  position: Position = new Position();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dateOfBirth', 'position', 'buttons'];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private employeeHttpService: EmployeeHttpService,
    private positionHttpService: PositionHttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  openDialog(employee: Employee = null) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = 'auto';
    dialogConfig.width = '400px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = employee;

    const dialogRef = this.dialog.open(EmployeeDialogComponent, dialogConfig);
    dialogRef.componentInstance.employeeCreated.subscribe(e => {
      this.employees.push(e);
    });
  }

  getEmployees() {
    this.httpSubscription = this.employeeHttpService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
        this.dataSource = new MatTableDataSource<Employee>(this.employees);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.dialog.closeAll();
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }
}
