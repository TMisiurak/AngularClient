import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeComponent } from './employee.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const childRoutes: Routes = [
  { path: '', redirectTo: '/employee/list', pathMatch: 'full' },
  { path: 'list', component: EmployeeListComponent },
  { path: ':id', component: EmployeeDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

const employeeRoutes: Routes = [
  { path: '', component: EmployeeComponent, children: childRoutes }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(employeeRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class EmployeeRoutingModule { }
