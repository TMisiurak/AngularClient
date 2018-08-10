import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: 'users', component: UserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
