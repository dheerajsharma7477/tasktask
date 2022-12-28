import { Component, OnInit } from '@angular/core';
import { AbstractHeader } from 'core/abstract/abstract-header';
import { MasterObjectService } from 'core/services/master-object.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestorecollectionService } from 'src/app/firestorecollection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d1-header',
  templateUrl: './d1-header.component.html',
  styleUrls: ['./d1-header.component.scss']
})
export class D1HeaderComponent extends AbstractHeader implements OnInit {

  constructor(public object: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public router:Router) {
    super(object,firestorecollectionService,router)
   }

  ngOnInit() {
  }

}
