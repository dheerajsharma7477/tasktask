import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Constants } from 'core/utils/pipe/constant';
import { DOM_UTIL } from 'core/utils/pipe/dom-util';
import { Util } from 'core/utils/pipe/util';

@Injectable({
  providedIn: 'root'
})
export class MasterObjectService {

  constructor(public _snackBar: MatSnackBar,public constant: Constants) { }
  public whitlableList;
  public themeChange: any
  public selectedTask=[]
  public listforUpdate=[]
  public viewTask:any

  public id=""
  public taskDiscription=""
  public branch=""
  public designType="D1"
  public date=""
  public status=""
  public progress=1
  public username=""

  public userName='Dheeraj'
  public branchList=[]
  public design=[
    {
      dname:'Iceexchange',
      alias:'D1'
    },
    {
      dname:'IceCric',
      alias:'D2'
    },
    {
      dname:'World777',
      alias:'D3'
    },
    {
      dname:'Sky',
      alias:'D4'
    },
    {
      dname:'Diamond',
      alias:'D5'
    },
    {
      dname:'Lotus',
      alias:'D6'
    },
    {
      dname:'All',
      alias:'All'
    }
  ]
  public userInfo:any
  /**
   * @description 
   * This method returns DOM_UTIL class instance to access the explicitly defined methods,objects and its properties.
   * 
   * Getter Mathod
   */
  getDOMInstance() {
    return DOM_UTIL
  }

    /**
   * @description 
   * This method returns util class instance to access the explicitly defined methods,objects and its properties.
   * 
   * Getter Mathod
   */
  getUtilInstance() {
      return Util
    }


  /**
   * @description 
   * This method return Constant Class instance to access the explicitly defined constant objects,Array Obejcts.
   * 
   * Getter Method.
   */
  getConstants() {
    return this.constant;
  }
  manageLogoForTheme() {
    var hostname = window.location.hostname
    var origin = window.location.origin
    var theme = this.whitlableList
    // console.log(theme)
    var data
    // console.log(hostname,origin,theme)
    data = theme.find((x) => x.hostname1 == hostname || x.hostname2 == hostname || x.hostname3 == hostname || x.origin == origin)
    if (data) {
      this.themeChange = data
    }
    else {
      this.themeChange = theme[2]
    }
    // console.log(this.themeChange)
    // this.manageTabsForTheme(this.themeChange)
  }

  success(msz){
    this._snackBar.open(msz, '✗', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    setTimeout(() => {
      this._snackBar.dismiss()
    }, 1000);
  }
}
