import { MatBottomSheet } from '@angular/material';
import { MasterObjectService } from 'core/services/master-object.service';
import { BottomSheetOverviewExampleSheet } from 'src/app/design-3/d3-add-task/d3-add-task.component';
// import { AngularFirestore } from '@angular/fire/firestore';
import { FirestorecollectionService } from 'src/app/firestorecollection.service';
import { map } from 'rxjs/operators';
import { AbstractAddTaskDef } from './abstractAddTaskDef';
export class AbstractAddTask extends AbstractAddTaskDef{


constructor(public object: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public _bottomSheet: MatBottomSheet)
    {
        super()
        this.firestorecollectionService.gettasktask(this.object.userInfo.name)
    }


    /**
     * function for add new task in firebase
     * @param data 
     * @param date 
     */
    addtaskData(data,date){
    // let res:any
    // res = this.firestorecollectionService.addTask()
    // .get()
    // .pipe(map((item:firebase.firestore.QuerySnapshot) => {
    // return item.docs.map((dataItem: firebase.firestore.QueryDocumentSnapshot) => {
    //     // console.log(dataItem,dataItem.data())
    //     dataItem.data()
    // });
    // }));
    // res.subscribe(res=>{
    //     console.log(res)
    // })
    // return
    this.object.selectedTask.push(data)
    // console.log(this.object.selectedTask)
    this.firestorecollectionService.addTask().doc(date).set({
        task: this.object.selectedTask,
        date: date,

    }).then(res=>{
        this.object.selectedTask=[]
        this.addBranch(data)
    })
  }

  addBranch(data:any){
    let ind = this.object.branchList.findIndex(el=>el.branch==data.branch)
    if(ind==-1){
        let br=[]
        this.object.branchList.forEach(el=>{ //convert array of object to array
            br.push(el.branch)
        })
        br.push(data.branch)
        this.firestorecollectionService.getBranch().doc(this.object.userInfo.name).set({
            branchs : br
        })
    }
  }

/**
 * function for update task in firebase
 * @param data 
 * @param date 
 * @returns 
 */
updateTaskdata(data,date){
    if(!data.length){
        this.firestorecollectionService.addTask().doc(date).delete()
        return
    }
    this.firestorecollectionService.addTask().doc(date).update({
        task: data,
        date: date,
    }).then(res=>{
        this.clear()
    })
}

/**
 * clear form field
 */
clear(){
    this.object.listforUpdate = []
    this.object.taskDiscription=''
    this.object.branch=''
    this.object.designType='D1'
    this.object.id=''
    this.object.date=''
    this.object.status=''
    this.object.progress=1

}

/**
 * function for update task status assign to qa prod etc
 * @param task 
 * @param list 
 * @param status 
 */
updateStatus(task,list,status){
      this.updateStatusForSameTask(task.id,status)
}

/**
 * for update status
 * @param taskid 
 * @param status 
 */
updateStatusForSameTask(taskid,status){
    this.firestorecollectionService.taskListFromFireBase.forEach(el => {
        el.task.forEach(el2=>{
            if(el2.id==taskid){
                el2.status=status
                this.updateTaskdata(el.task,el.date)
            }
            
        })
        
    });
}



/**
 * funciton for add task to today
 * @param task 
 */
copytoToday(task){
    if(this.firestorecollectionService.taskListFromFireBase[0].date==new Date().toDateString()){
        this.object.selectedTask=this.firestorecollectionService.taskListFromFireBase[0].task
    }
    let taskData={
        "taskDiscription" : task.taskDiscription,
        "branch" : task.branch,
        "designType" : task.designType,
        "status" :task.status,
        "date":task.date,
        "id":task.id,
        "progress":task.progress,
        "name":task.name

      }
      this.addtaskData(taskData,new Date().toDateString())
}

/**
 * function for remove task 
 * @param task 
 * @param list 
 */
removetask(task,list){
    this.object.listforUpdate = list.task
    let index = this.object.listforUpdate.findIndex(el=>el.id==task.id)
    this.object.listforUpdate.splice(index, 1)
    this.updateTaskdata(this.object.listforUpdate,list.date)
    setTimeout(() => {
      this.object.listforUpdate=[]
    }, 200);
}

    /**
     * funciton for select one bye one task for copy
     * @param task 
     */
    copytask(task){
        if(task.taskDiscription.includes('*')){
            alert('Please check:-'+task.taskDiscription.split('*')[1])
        }
        let ind = this.copyTaskArray.findIndex(el=>el.id==task.id)
        if(ind<0){
            this.copyTaskArray.push(task)
        }
        this.branchlist=[]
        this.copyTaskArray.forEach(el=>{
            let ind = this.branchlist.findIndex(br=>br==el.branch)
            if(ind<0){this.branchlist.push(el.branch)}
        })
    }

    /**
     * FUCNTION FOR COPY TEXT
     * @param text 
     */
    copyText(){
        let text:any
        let copyar=[]
        this.branchlist.forEach(branch=>{
            let copyText: any = {}
            // copyText.branch=',        -'+branch
            this.copyTaskArray.forEach((task)=>{
                task.designType = task.designType.replaceAll(',','-')
                if(task.branch==branch){
                    if(copyText[branch]){
                        copyText[branch]=copyText[branch]+',        '+'-'+task.taskDiscription+'('+task.designType+')'
                    }
                    else{
                        copyText[branch]=',        -'+task.taskDiscription+'('+task.designType+')'
                    }
                }
            })
            copyar.push(copyText)
        })
        text=JSON.stringify(copyar)
        text=text.replace('[','')
        text=text.replace(']','')
        text=text.replaceAll('{','')
        text=text.replaceAll('}','')
        text=text.replaceAll('"','')
        text=text.replaceAll(',','\n')
        text=text.replaceAll(':',' : ')

        navigator.clipboard.writeText(text);
    }

    /**
     * function for cancle copy
     */
    cancleCopy(){
        this.branchlist=[]
        this.copyTaskArray=[]
    }
    
    /**
     * Function for copy today task
     * @param text 
     */
    copytodayTask(text){
        text.task=text.task.filter(el=>el.name==this.object.userInfo.name)
        let cp=[]
        text.task.forEach(el=>{cp.push('-'+el.taskDiscription+' ('+el.branch+')')})
        text=JSON.stringify(cp)
        text=text.replace('[','')
        text=text.replace(']','')
        text=text.replaceAll('"','')
        text=text.replaceAll(',','\n')
        navigator.clipboard.writeText(text);
    }

    copyBranch(branch){
        navigator.clipboard.writeText(branch);
    }

    /**
     * funciton for filter data 
     * @param event 
     */
    filter(event){
        this.firestorecollectionService.taskList=[]
        this.firestorecollectionService.listlength=0
        this.selectedStatus=event
        if(this.selectedStatus!='ALL'){
            this.firestorecollectionService.taskListFromFireBase.forEach(el=>{
                let data2 = el.task.filter(el=>el.status==this.selectedStatus)
                this.firestorecollectionService.listlength=data2.length+this.firestorecollectionService.listlength
                if(data2.length){
                  this.firestorecollectionService.taskList.push({date:el.date,task:data2})
                }
            })
        }
        else{
            this.firestorecollectionService.taskList=this.firestorecollectionService.taskListFromFireBase 
            this.firestorecollectionService.taskListFromFireBase.forEach(el=>{
                this.firestorecollectionService.listlength=el.task.length+this.firestorecollectionService.listlength
              })
        }
    }
    
    removeBranch(index){
        this.object.branchList.splice(index, 1)
        let br=[]
        this.object.branchList.forEach(el=>{  //convert array of object to array
            br.push(el.branch)
        })
        this.firestorecollectionService.getBranch().doc(this.object.userInfo.name).set({
            branchs : br
        })
        // this.updateTaskdata(this.object.listforUpdate,list.date)
    
    }
    

    checkBranchStatus(search){
        
            this.searchModel=search ? search :''
            this.isBranchSearch=true
            if(this.searchModel==''){
                this.isBranchSearch=false // prevent css
            }

            this.object.branchList.forEach(el=>{ //reset value
                el.status=''
            })
            this.firestorecollectionService.taskList.forEach((el2,i)=>{
                if(i<10){
                    el2.task.forEach(task=>{
                        let ind = this.object.branchList.findIndex(el=>el.branch==task.branch)
                        if(ind!=-1){
                            if(task.status=='inProgress' && task.name==this.object.userInfo.name){
                                this.object.branchList[ind].status='inProgress'
                            }
                        }
                    })
                }
            })
    }
}
