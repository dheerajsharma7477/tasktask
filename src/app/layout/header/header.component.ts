import { Component, OnInit } from '@angular/core';
import { MasterObjectService } from 'core/services/master-object.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public object: MasterObjectService) { }

  ngOnInit() {
    // this.object.themeChange.uxDesign=='D1'
  }

}
