import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';

import { SharedModule } from './shared/shared.module';
import { NgmaterialModule } from './shared/ngmaterial/ngmaterial.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployeeDialogComponent } from './employee/components/employee-dialog/employee-dialog.component';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    NgmaterialModule,
    ReactiveFormsModule,
    // EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EmployeeDialogComponent
  ]
})
export class AppModule { }
