import { Component, OnInit, OnDestroy, Inject, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../../shared/models/employee';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { PositionHttpService } from '../../../services/position-http.service';
import { EmployeeHttpService } from '../../../services/employee-http.service';
import { Position } from '../../../shared/models/position';
import { Gender } from '../../../shared/models/gender';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss']
})
export class EmployeeDialogComponent implements OnInit, OnDestroy {
  employee: Employee = new Employee();
  positions: Position[] = [];
  genders: Gender[] = [{id: 1, name: 'Male'}, {id: 2, name: 'Female'}];
  result: Observable<Employee>;
  isUpdating = false;

  public done = false;
  public loading = false;

  @Output() employeeCreated = new EventEmitter<Employee>();

  minDate = new Date(1850, 0, 1);
  maxDate = new Date(Date.now());
  startDate = new Date(1990, 0, 1);

  private httpPositionsSubscription: Subscription;

  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  searchPositionFormControl = new FormControl('', [Validators.required]);
  genderFormControl = new FormControl('', [Validators.required]);
  dateOfBirthFormControl = new FormControl('', [Validators.required]);

  constructor(
    private dialogRef: MatDialogRef<EmployeeDialogComponent>,
    private employeeHttpService: EmployeeHttpService,
    private positionHttpService: PositionHttpService,
    @Inject(MAT_DIALOG_DATA) private employeeInput: Employee
  ) {
    console.log('EmployeeDialogComponent loaded');
    this.httpPositionsSubscription = this.positionHttpService.getPositions().subscribe(data => {
      this.positions = data;
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit(f: NgForm, employee: Employee) {
    if (this.isUpdating) {
      this.result = this.update(employee);
    } else {
      this.result = this.save(employee);
    }
    this.result.subscribe((newEmployee) => {
      this.done = true;
      this.dialogRef.close();
      this.dialogRef.afterClosed().subscribe(() => {
        console.log('Employee successfully saved');
      });
      setTimeout(() => {
        this.done = false;
      }, 5000);
      if (this.isUpdating) {
        this.employeeCreated.emit(newEmployee);
      }
      this.loading = false;
    });
  }

  save(employee: Employee): Observable<Employee> {
    return this.employeeHttpService.create(employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.employeeHttpService.update(employee);
  }

  ngOnInit() {
    if (this.employeeInput != null) {
      this.employee = this.employeeInput;
      this.isUpdating = true;
    }
  }

  filterStates(val: string) {
    if (val) {
      const filterValue = val.toLowerCase();
      return this.positions.filter(p => p.title.startsWith(filterValue));
    }
    return this.positions;
  }

  setPosition(id: number) {
    this.employee.positionId = id;
  }

  setGender(id: number) {
    this.employee.genderId = id;
  }

  ngOnDestroy() {
    this.dialogRef.close();
    this.httpPositionsSubscription.unsubscribe();
  }

}
