import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { AbstractAddTask } from 'core/abstract/abstract-addTask';
import { MasterObjectService } from 'core/services/master-object.service';
import { FirestorecollectionService } from 'src/app/firestorecollection.service';

@Component({
  selector: 'app-task-model',
  templateUrl: './task-model.component.html',
  styleUrls: ['./task-model.component.scss']
})
export class TaskModelComponent extends AbstractAddTask implements OnInit {
  public view:boolean
  constructor(public _bottomSheet: MatBottomSheet, public service: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public dialog: MatDialog) {
    super(service,firestorecollectionService,_bottomSheet)
   }

  ngOnInit() {
    setTimeout(() => {
      this.object.viewTask.taskDiscription = this.object.viewTask.taskDiscription.split(',')
      this.view=true
    }, 100);
  }

}
