import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { AbstractAddTask } from 'core/abstract/abstract-addTask';
import { MasterObjectService } from 'core/services/master-object.service';
import { FirestorecollectionService } from 'src/app/firestorecollection.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { TaskModelComponent } from 'src/app/layout/model/task-model/task-model.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-d3-add-task',
  templateUrl: './d3-add-task.component.html',
  styleUrls: ['./d3-add-task.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-50%)' }),
        animate('500ms', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('500ms', style({ transform: 'translateX(-90%)' }))
      ])
    ])
  ]
})
export class D3AddTaskComponent extends AbstractAddTask implements OnInit {


  

  public dialogStatus:any
  constructor(public _bottomSheet: MatBottomSheet, public service: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public dialog: MatDialog) {
    super(service,firestorecollectionService,_bottomSheet)
   }
  
  ngOnInit() {
    this.todayDate = new Date().toDateString()
    this.object.getDOMInstance().scrollToTop()
    // this.filtertoInprogress()
    this.getBranchs()


    
  }

 /**
 * Funtion for grid drag drop
 * @param e 
 */
  dragMoved(list,listdata) {
    this.isdragStart=true
    this.dragList = list
    this.dragListdata = listdata

  }
  drop(event: CdkDragDrop<string[]>) {
    let param:any = event.container.data
    this.isdragStart=false
    if(param =='remove'){
      this.handleRemoveTask(this.dragList,this.dragListdata)
      return
    }

    if(event.previousContainer.data==event.container.data){return}
    this.updateStatus(this.dragList,this.dragListdata,param)
  }

  menuClick(list,listdata,param){
    if(param=='copyToday'){
      this.copytoToday(list)
    }
    else if(param=='Update'){
      this.openUpdateModel(list,listdata)
    }
    else if(param=='remove'){
      this.handleRemoveTask(list,listdata)
    }
    else if(param=='copyTask'){
      this.copytask(list)
    }
    else{
      this.updateStatus(list,listdata,param)
    }
  }
  viewTask(task){
    // return
    this.object.viewTask=task
    this.dialog.open(TaskModelComponent,{
      minWidth:'400px'
    });
  }
  getBranchs(){
    this.firestorecollectionService.getBranch().doc(this.object.userInfo.name).valueChanges().subscribe((res:any)=>{
      if(res){
        this.object.branchList=[]
        res.branchs.forEach(el=>{
          let br={branch:el,status:'active'}
          this.object.branchList.push(br) 
        })

      }
      let ind = this.object.branchList.findIndex((el)=>el.branch=='')
      if(ind==-1){
        this.object.branchList.unshift({branch:'',status:'active'})
      }
    })
    // this.firestorecollectionService.taskList
  }
  

  filtertoInprogress(){
    if(this.firestorecollectionService.taskList.length){
      this.filter('inProgress')
    }
    else{
      this.retry()
    }
  }

  retry(){
    setTimeout(() => {
      this.filtertoInprogress()
    }, 1000);
  }
  /**
   * function to check first array in empty or have data to push or create new array
   */
  addnewTask(): void {
    if(this.firestorecollectionService.allTask.length){
      if(this.firestorecollectionService.allTask[0].date==new Date().toDateString()){
        this.service.selectedTask=this.firestorecollectionService.allTask[0].task
      }
    }
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  // addTask(data): void {
  //   this.service.selectedTask=data.task
  //   this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  // }

  /**
   * function for update task data patch value and open model
   * @param task 
   * @param list 
   */
  openUpdateModel(task,list){
    this.object.listforUpdate = list.task
    
    this.object.taskDiscription=task.taskDiscription
    this.object.branch=task.branch
    this.object.designType=task.designType
    this.object.id=task.id
    this.object.date=list.date
    this.object.status=task.status
    this.object.progress=task.progress
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
}

/**
 * function for check previous in progress task ask to add for today
 */
reAssignInProgressTask(){
      let ind=1
      this.firestorecollectionService.taskListFromFireBase.forEach((el,i) => {
        if(i<10 && el.date!=new Date().toDateString()){
              el.task.forEach(el2=>{
                  if(el2.status=='inProgress'){
                      if(this.firestorecollectionService.taskListFromFireBase[0].date==new Date().toDateString()){
                          this.object.selectedTask=this.firestorecollectionService.taskListFromFireBase[0].task
                      }
                      let index =this.object.selectedTask.findIndex(el=>el.id==el2.id)
                      if(index==-1){
                        if (confirm('Task '+ind+': '+el2.taskDiscription) == true) {
                            this.addtaskData(el2,new Date().toDateString())
                        } 
                        else {
                        }
                        ind=ind+1

                      }
                  }
              })
          }
          if(ind==1){
            this.service.success('No pending task detected')
          }
      });
}

/**
 * function for open confirm model not in use
 */
handleRemoveTask(task,list): void {
  this.dialogStatus = this.dialog.open(DialogOverviewExampleDialog, {
  });

  this.dialogStatus.afterClosed().subscribe(result => {
    if(result){
      this.removetask(task,list)
    }
  });
}

/**
 * function for open confirm model not in use
 */
 handleRemoveBranch(i): void {
  this.dialogStatus = this.dialog.open(DialogOverviewExampleDialog, {
  });

  this.dialogStatus.afterClosed().subscribe(result => {
    if(result){
      this.removeBranch(i)
    }
  });
}

  
}


/**
 * class for open model for add task
 */
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./d3-add-task.component.scss']
})
export class BottomSheetOverviewExampleSheet extends AbstractAddTask{
  myControl = new FormControl('');
  public filteredOptions:any
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,public service: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public _bottomSheet: MatBottomSheet) {
    super(service,firestorecollectionService,_bottomSheet)
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.object.branchList.filter(option => option.branch.toLowerCase().includes(filterValue));
  }
  /**
   * function for add new task
   * @returns 
   */
  addTaskData(){
    if(!this.service.taskDiscription || !this.service.branch || !this.service.progress){
      this.service.success('please fill required filed')
      return
    }
    let taskData={
      "id":Math.floor(Math.random() * 100000),
      "taskDiscription" : this.service.taskDiscription,
      "branch" : this.service.branch.toLowerCase(),
      "designType" : this.service.designType,
      "status" : 'inProgress',
      "date":new Date().toDateString(),
      "progress":'1',
      "name":this.object.userInfo.name

    }
    this.addtaskData(taskData,new Date().toDateString())
    setTimeout(() => {
      this._bottomSheetRef.dismiss();
      this.clear()
    }, 200);
  }

  /**
   * funciton for update task
   * @returns 
   */
  updateTaskData(){
    if(!this.service.taskDiscription || !this.service.branch || !this.service.progress){
      this.service.success('please fill required filed')
      return
    }
    let taskData={
      "taskDiscription" : this.service.taskDiscription,
      "branch" : this.service.branch.toLowerCase(),
      "designType" : this.service.designType,
      "status" : this.service.status,
      "date":this.service.date,
      "id":this.service.id,
      "progress":this.service.progress,
      "name":this.service.userInfo.name
    }
    let index = this.object.listforUpdate.findIndex(el=>el.id==this.service.id)
    this.object.listforUpdate[index]=taskData
    this.updateTaskdata(this.object.listforUpdate,this.service.date)
    setTimeout(() => {
      this._bottomSheetRef.dismiss();
      this.object.listforUpdate=[]
    }, 200);
  }

  public desn=[]
  chooseDesign(type,event){
    if(event){
      if(!this.desn.includes(type)){
        this.desn.push(type)
      }
    }
    else{
      let ind = this.desn.indexOf(type)
      if(ind!=-1){
        this.desn.splice(ind,1)
      }
    }
    this.service.designType=this.desn.join(',')
  }
    /**
   * Funtion is used for stop blinking effect when get more firebase event
   * @param index 
   * @param item 
   */
  // trackByEvent(index: string, item: any): string {
  //   console.log(item)
  //     return index;
  // }
}


/**
 * class for open confirm model
 */
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './confirm.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

