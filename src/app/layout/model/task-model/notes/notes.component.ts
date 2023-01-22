import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { AbstractAddTask } from 'core/abstract/abstract-addTask';
import { MasterObjectService } from 'core/services/master-object.service';
import { FirestorecollectionService } from 'src/app/firestorecollection.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
declare var CKEDITOR

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent  extends AbstractAddTask implements OnInit {
  public notes:any
  public Editor = ClassicEditor;

  constructor(public _bottomSheet: MatBottomSheet, public service: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public dialog: MatDialog) {
    super(service,firestorecollectionService,_bottomSheet)
   }
  
  ngOnInit() {
    this.firestorecollectionService.getNotes().doc(this.object.userInfo.name).valueChanges().subscribe((res:any)=>{
      if(res){
        this.notes=res
      }
    })
  }


//   onReady( editor ) {
//     editor.ui.getEditableElement().parentElement.insertBefore(
//         editor.ui.view.toolbar.element,
//         editor.ui.getEditableElement()
//     );
// }

}
