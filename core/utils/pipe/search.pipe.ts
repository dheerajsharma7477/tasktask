import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, filter: any): any {
    let defaultFilter: boolean;
    if (!filter) {
      return items;
    }

    if (!Array.isArray(items)) {
      return items;
    }

    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
     
      // console.log(filter)
      if (defaultFilter) {
        
        let filterData =  items.filter(item => filterKeys.reduce((x, keyName) => (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
        let userDetail = {
          userDetail:filterData,
          searchText:filter
        };
      
        // this.broadCast.broadcast(this.object.getConstants().BROADCASTKEY.PERSISTFORDOWNLOAD, { data: userDetail });
        return filterData;
      }
      else {
        let filterData = items.filter((item,ind) => {
       
          return filterKeys.some((keyName) => {
                     
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
        let data = {
          filterData:filterData,
          searchText:filter
        };
     
        // this.broadCast.broadcast(this.object.getConstants().BROADCASTKEY.PERSISTFORDOWNLOAD, { data: data });
        return filterData;
      }
    }
  }

}
