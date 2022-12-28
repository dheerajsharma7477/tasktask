import { Component, OnInit } from '@angular/core';
import { MasterObjectService } from 'core/services/master-object.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(public object: MasterObjectService) { }

  ngOnInit() {
  }

}
