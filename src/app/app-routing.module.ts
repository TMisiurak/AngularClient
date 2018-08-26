import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EmployeeModule } from './employee/employee.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  // { path: 'employees', loadChildren: () => EmployeeModule },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
