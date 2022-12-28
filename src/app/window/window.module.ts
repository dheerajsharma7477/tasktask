import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowRoutingModule } from './window-routing.module';
import { OffersComponent } from './offers/offers.component';
import { D1OffersComponent } from '../design-1/d1-offers/d1-offers.component';
import { D2OffersComponent } from '../design-2/d2-offers/d2-offers.component';
import { BottomSheetOverviewExampleSheet, D3AddTaskComponent, DialogOverviewExampleDialog } from '../design-3/d3-add-task/d3-add-task.component';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatSelectModule, MatSliderModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop'
import { SearchPipe } from 'core/utils/pipe/search.pipe';
import { DOM_UTIL } from 'core/utils/pipe/dom-util';
import { TaskModelComponent } from '../layout/model/task-model/task-model.component';

@NgModule({
  declarations: [
    OffersComponent,
    D1OffersComponent,
    D2OffersComponent,
    D3AddTaskComponent,
    BottomSheetOverviewExampleSheet,
    DialogOverviewExampleDialog,
    SearchPipe,
    TaskModelComponent
  ],
  imports: [
    CommonModule,
    WindowRoutingModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    // MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatProgressBarModule,
    DragDropModule,
    MatTooltipModule,
    MatDialogModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSliderModule,
    MatAutocompleteModule
  ],
  bootstrap: [
    BottomSheetOverviewExampleSheet,
    DialogOverviewExampleDialog,
    TaskModelComponent
  ],
  exports:[
    OffersComponent,
    D1OffersComponent
  ],
  providers:[
    DOM_UTIL
  ]
})
export class WindowModule { }
