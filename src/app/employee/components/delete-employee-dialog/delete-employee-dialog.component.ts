import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { EmployeeHttpService } from '../../../services/employee-http.service';
import { Employee } from '../../../shared/models/employee';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee-dialog',
  templateUrl: './delete-employee-dialog.component.html',
  styleUrls: ['./delete-employee-dialog.component.scss']
})
export class DeleteEmployeeDialogComponent implements OnInit, OnDestroy {
  employee: Employee;
  deleted = false;

  private httpSubscription: Subscription;

  constructor(
    private dialogRef: MatDialogRef<DeleteEmployeeDialogComponent>,
    private employeeHttpService: EmployeeHttpService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private employeeInput: Employee
  ) { }

  ngOnInit() {
    if (this.employeeInput != null) {
      this.employee = this.employeeInput;
    }
  }

  close() {
    this.dialogRef.close();
  }

  confirmDelete(): boolean {
    this.httpSubscription = this.employeeHttpService.delete(this.employee.id).subscribe(() => {
      console.log('Deleted employee'),
      this.deleted = true;
      this.dialogRef.close();
    });
    return true;
  }

  ngOnDestroy() {
    this.dialogRef.close();
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }
}
