import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractHeader } from 'core/abstract/abstract-header';
import { MasterObjectService } from 'core/services/master-object.service';
import { FirestorecollectionService } from 'src/app/firestorecollection.service';

@Component({
  selector: 'app-d3-header',
  templateUrl: './d3-header.component.html',
  styleUrls: ['./d3-header.component.scss']
})
export class D3HeaderComponent extends AbstractHeader implements OnInit {

  constructor(public object: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public router:Router) {
    super(object,firestorecollectionService,router)
   }

  ngOnInit() {
    let res =this.object.getUtilInstance().getStore(this.object.getConstants().USERINFO)
    if(res){
      this.object.userInfo= JSON.parse(res)
    }
  }

}
