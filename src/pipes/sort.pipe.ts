import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    /**
    * Sort array of object by cate of cretion. Descending
    * @param recepies - Recepies array.
    */
    transform(recepies: any): any {
        return recepies.sort((a,b)=>{
            if (a.created > b.created)  return -1;
            else if(a.created < b.created) return  1;
            else  return  0;
        });
    }
}