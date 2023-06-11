import { Route } from '@angular/compiler/src/core';
import { MasterObjectService } from 'core/services/master-object.service';
// import { AngularFirestore } from '@angular/fire/firestore';
import { FirestorecollectionService } from 'src/app/firestorecollection.service';
import { Router } from '@angular/router';
import { AbstractDashboardDef } from './abstractDashbordDef';

export class AbstractDashboard extends AbstractDashboardDef{

public searchValue='system errro 001'
constructor(public object: MasterObjectService,public firestorecollectionService:FirestorecollectionService,public router:Router) {
  super(object,firestorecollectionService,router)
  }

  getprimaryColor(dn) {
      let color = dn.primaryColor
      this.themeBackground = color
      this.pc = color
      this.filtersecondryColor(dn)

  }
  getsecondryColor(dn) {
    console.log(dn)
    this.selectedDomain = dn.domainName
    let color = dn.secondryColor
    this.themeBorder =  '2px solid'+' '+color
    this.themeTextColor = color
    this.sc = color
  }
  
  filterDesign(){
    let m=new Map();
    let tempArray=[];
            tempArray.push({provider: "All"})
            this.domains.forEach(el => {
                if(!m.has(el.design)){
                    m.set(el.design,true)
                    tempArray.push(el)
                }
            });
    this.domainDesign = tempArray
  }
  filterPrimaryColor(){
    let m=new Map();
    let tempArray=[];
            tempArray.push({provider: "All"})
            this.filterDomains.forEach(el => {
                if(!m.has(el.primaryColor)){
                    m.set(el.primaryColor,true)
                    tempArray.push(el)
                }
            });
    this.domainprimaryColor = tempArray
  }
  filterSecondryColor(){
    let m=new Map();
    let tempArray=[];
            tempArray.push({provider: "All"})
            this.filterDomains.forEach(el => {
                if(!m.has(el.secondryColor)){
                    m.set(el.secondryColor,true)
                    tempArray.push(el)
                }
            });
    this.domainSecondryColor = tempArray
    console.log(this.domainSecondryColor)
  }
  filterDomain(dn){
    this.uxDesign = dn.design
    this.filterDomains = this.domains.filter(e => e.design == dn.design)
    this.filterPrimaryColor()
    this.filterSecondryColor()
  }
  filtersecondryColor(dn){
    this.filterDomains = this.domains.filter(e => e.primaryColor == dn.primaryColor && e.design == dn.design)
    console.log(this.filterDomains)
    this.domainSecondryColor =this.filterDomains
    // this.filterPrimaryColor()
    // this.filterSecondryColor()
  }

}
