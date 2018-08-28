import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { SharedModule } from '../shared/shared.module';
import { NgmaterialModule } from '../shared/ngmaterial/ngmaterial.module';
import { EmployeeDialogComponent } from './components/employee-dialog/employee-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    NgmaterialModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    // EmployeeDialogComponent
  ],
  exports: [
    EmployeeListComponent,
    EmployeeDetailsComponent
  ]
})
export class EmployeeModule {
  constructor() {
    console.log('EmployeeModule is loaded');
  }
}
