import { Component, OnInit } from '@angular/core';
import { AbstractHeader } from 'core/abstract/abstract-header';
import { MasterObjectService } from 'core/services/master-object.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestorecollectionService } from 'src/app/firestorecollection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d2-header',
  templateUrl: './d2-header.component.html',
  styleUrls: ['./d2-header.component.scss']
})
export class D2HeaderComponent extends AbstractHeader implements OnInit {

  constructor(public object: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public router:Router) {
    super(object,firestorecollectionService,router)
   }

  ngOnInit() {
  }

}
