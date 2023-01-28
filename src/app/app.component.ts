import { Component, Optional, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore' ;
import { FirestorecollectionService } from './firestorecollection.service';
import { MasterObjectService } from 'core/services/master-object.service';
import whitelable from '../assets/whitelable.json'
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.2s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.2s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[AngularFirestore],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class AppComponent implements OnInit {
  title = 'firebase';
  public username ='dheeraj'
  public surename ='sharma'
  public numberList=['1','2','3','4','5','6','7','8','9','✗','0','✔']
  public upiPin=[]
  public loginAuth:boolean
//   public whitelable=[
//     {
//         "origin": "http://localhost:4200",
//         "hostname1": "",
//         "logo": "assets/images/logo.png",
//         "loginlogo": "assets/images/logo-login.png",
//         "title": "IceExchange",
//         "favIcon": "./assets/images/favIcon.png",
//         "adminbg": "assets/images/loingbg.png",
//         "whitelableId": "20210102",
//         "uxDesign": "D1",
//         "betfair": true
//     },
//     {
//         "origin": "http://localhost:4300",
//         "hostname1": "192.168.1.13",
//         "logo": "assets/images/logo.png",
//         "loginlogo": "assets/images/logo-login.png",
//         "title": "IceExchange",
//         "favIcon": "./assets/images/favIcon.png",
//         "whitelableId": "20210217",
//         "uxDesign": "D2",
//         "betfair": true,
//         "adminbg": "assets/images/loingbg.png"
//     }
// ]
  public lists:any
  constructor(public object: MasterObjectService, public router: Router,public firestorecollectionService:FirestorecollectionService)
  {

  }

  ngOnInit(){
    this.object.whitlableList = whitelable;
    this.object.manageLogoForTheme()
    let res = this.object.getUtilInstance().getStore('loginAuth')
    if(res){
      this.loginAuth=true
    }
    if(this.object.getUtilInstance().getStore('loginAuth')){
      this.router.navigate(['tasktask'])
    }
    console.log('Build.VERSION.v2.0')
  }

  submit(num){
    let upi=['5','2','5','2']
    if(num=='✔'){
      let pin = this.upiPin.join("")
      this.firestorecollectionService.getLoginAuth().doc(pin).valueChanges().subscribe((res:any)=>{
        if(res){
          console.log(res)
          this.loginAuth=true
          this.object.getUtilInstance().storeState('loginAuth',true)
          this.object.getUtilInstance().storeState(this.object.getConstants().USERINFO, JSON.stringify(res))

          this.upiPin=[]
          this.router.navigate(['/tasktask'])
        }
        else{
          this.object.success('Invalid Pin please Try Again')
          this.upiPin=[]
        }
      })
    }
    else if(num=='✗'){
      this.upiPin.pop()
    }
    else{
      if(this.upiPin.length<4){
        this.upiPin.push(num)
      }
    }
  }
}
