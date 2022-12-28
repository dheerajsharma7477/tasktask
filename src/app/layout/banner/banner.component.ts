import { Component, OnInit } from '@angular/core';
import { MasterObjectService } from 'core/services/master-object.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(public object: MasterObjectService) { }

  ngOnInit() {
  }

}
