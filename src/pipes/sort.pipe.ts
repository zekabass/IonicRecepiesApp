import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    /**
    * Sort array of object by id. Descending
    * @param recepies - Recepies array.
    */
    transform(recepies: any): any {
        let sorted = recepies.sort((a,b)=> a.id - b.id);
        /* Reverse array so we can get descending order */
        return sorted.reverse();
    }
}