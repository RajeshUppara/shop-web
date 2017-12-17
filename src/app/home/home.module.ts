import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { DomainComponent } from './domain/domain/domain.component';
import { DomainEditComponent } from './domain/domain-edit/domain-edit.component';
import { DomainListComponent } from './domain/domain-list/domain-list.component';
import { DomainService } from './domain/domain.service';



const routes: Routes = [
  { path: '', component: DomainComponent},
  { path: 'domain', component: DomainComponent},

];

@NgModule({
  imports: [
  CommonModule,
   RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
  ],
  declarations: [
    DomainComponent,
    DomainEditComponent,
    DomainListComponent
  ],
  exports: [RouterModule],
  providers: [ DomainService ]
})
export class HomeModule { }
