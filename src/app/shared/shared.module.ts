import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { NgmaterialModule } from './ngmaterial/ngmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    NgmaterialModule
  ],
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
