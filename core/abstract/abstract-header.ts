import { Route } from '@angular/compiler/src/core';
import { MasterObjectService } from 'core/services/master-object.service';
// import { AngularFirestore } from '@angular/fire/firestore';
import { FirestorecollectionService } from 'src/app/firestorecollection.service';
import { Router } from '@angular/router';

export class AbstractHeader{

public searchValue='system errro 001'
constructor(public object: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public router:Router)
    {
            if(this.object.themeChange.uxDesign=='D1'){
                console.log("Subcribe db1")
                // this.firestorecollectionService.getSomethingFromProject1()
            }
            else{
                console.log("Subcribe db2")
                // this.firestorecollectionService.getSomethingFromProject2()
            }

    }


submitdb1(){
    let value={
      name:this.searchValue,
      surename:this.searchValue
    }
    this.firestorecollectionService.addproject1().add(value).then(res=>{
    }).catch(error=>{
    })
  }
submitdb2(){
    let value={
      name:this.searchValue,
      surename:this.searchValue
    }
    this.firestorecollectionService.addproject2().add(value).then(res=>{
    }).catch(error=>{
    })
  }

  logout(){
    this.object.getUtilInstance().removeState('loginAuth')
    this.router.navigate(['/'])
  }
}
