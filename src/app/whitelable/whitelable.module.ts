import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhitelableRoutingModule } from './whitelable-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSelectModule } from '@angular/material';
import { RemoveDuplicatePipe } from 'core/utils/pipe/remove-duplicate.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    RemoveDuplicatePipe
  ],
  imports: [
    CommonModule,
    WhitelableRoutingModule,
    MatSelectModule
  ]
})
export class WhitelableModule { }
