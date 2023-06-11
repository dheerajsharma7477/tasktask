import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractDashboard } from 'core/abstract/abstractDashboard';
import { MasterObjectService } from 'core/services/master-object.service';
import { FirestorecollectionService } from 'src/app/firestorecollection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends AbstractDashboard implements OnInit {

  constructor(public object: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public router:Router) {
    super(object,firestorecollectionService,router)
  }

  ngOnInit() {
    this.filterDesign()
    this.filterPrimaryColor()
    this.filterSecondryColor()
  }

  
}
