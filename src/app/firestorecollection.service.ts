import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreConfigService } from './firestore-config.service';

@Injectable(
  {
  providedIn: 'root'
}
)
export class FirestorecollectionService {

  public taskListFromFireBase:any
  public allTask:any=[]

  public QA:any=[]
  public willgoProd:any=[]
  public prod:any=[]
  public taskList:any=[]
  
  public qaLength:number
  public willprodLength:number
  public prodLength:number
  public listlength:number

  constructor(
    @Inject('firebaseProject1') private firebaseProject1: FirestoreConfigService,
    @Inject('firebaseProject2') private firebaseProject2: FirestoreConfigService,

  ) { 
  }

  public getSomethingFromProject1() {
    this.firebaseProject1.collection('/db1').valueChanges().subscribe(docs => {
      // console.log(docs)
    });
  }

  public getSomethingFromProject2() {
    this.firebaseProject2.collection('/db2').valueChanges().subscribe(docs => {
      // console.log(docs)
    });
  }

  public gettasktask(username) {
    let databyName=[]

    this.firebaseProject2.collection('/tasktask').valueChanges().subscribe(docs => {
      this.taskListFromFireBase=docs
      this.taskListFromFireBase=this.taskListFromFireBase.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);
      
      this.allTask[0] = JSON.parse(JSON.stringify(this.taskListFromFireBase))[0] //deep copy for all task
      
      // this.taskListFromFireBase.forEach(el=>{ // get data by login user
      //   let data2 = el.task.filter(el=>el.name==username)
      //   if(data2.length){databyName.push({date:el.date,task:data2})}
      // })

      // this.taskListFromFireBase=databyName

      
      this.taskListFromFireBase.forEach(el=>{ //sort by progress or user task exist or not
        let ind = el.task.findIndex(el=>el.name==username)
        if(ind!=-1){el.isTaskExist=true}

        el.task=el.task.sort((a, b) => a.progress < b.progress ? -1 : 1);
      })
      this.getQAData(this.taskListFromFireBase,username)
    });
  }

  /**
   * function for split data
   * @param list 
   */
  getQAData(list,username){
    this.QA=[]
    this.willgoProd=[]
    this.prod=[]

    this.qaLength=0
    this.willprodLength=0
    this.prodLength=0
    this.listlength=0


    
    this.taskList=list

    list.forEach(el=>{
      this.listlength=el.task.length+this.listlength
    })

    //////////////////////////////////QA/////////////////////////////
    let qataskId=[]
    list.forEach(el=>{

      let data2 = el.task.filter(el=>el.status=='QA' && !qataskId.includes(el.id))
      data2.forEach(el=>{qataskId.push(el.id)}) //push id check alredy exist on not

      this.qaLength=data2.length+this.qaLength
      if(data2.length){
        this.QA.push({date:el.date,task:data2})
      }
    })
    this.checkExist(this.QA,username)


    //////////////////////////////////WILLPROD/////////////////////////////

    let willprodtaskId=[]
    list.forEach(el=>{

      let data2 = el.task.filter(el=> (el.status=='WILLGOPROD'|| el.status=='WILLGOPRODONQA')  && !willprodtaskId.includes(el.id))
      data2.forEach(el=>{willprodtaskId.push(el.id)}) //push id check alredy exist on not
      
      this.willprodLength=data2.length+this.willprodLength
      if(data2.length){
        this.willgoProd.push({date:el.date,task:data2})
      }
    })
    this.checkExist(this.willgoProd,username)

    //////////////////////////////////PROD/////////////////////////////

    let prodtaskId=[]
    list.forEach(el=>{

      let data2 = el.task.filter(el=>el.status=='prod' && !prodtaskId.includes(el.id))
      data2.forEach(el=>{prodtaskId.push(el.id)}) //push id check alredy exist on not

      this.prodLength=data2.length+this.prodLength
      if(data2.length){
        this.prod.push({date:el.date,task:data2})
      }
    })
    this.checkExist(this.prod,username)

  }

  //check list have name or not
  checkExist(data,username){
    data.forEach(el=>{
      let ind = el.task.findIndex(el=>el.name==username)
      if(ind!=-1){el.isTaskExist=true}
    })
  }

  public addproject1(){
   return this.firebaseProject1.collection('db1')
  }
  public addproject2(){
    return this.firebaseProject2.collection('db2')
   }
  public addTask(){
   return this.firebaseProject2.collection('tasktask')
  }
  public getBranch(){
    return this.firebaseProject2.collection('branch')
   }
  public getLoginAuth(){
   return this.firebaseProject2.collection('loginAuth')
  }
}
