import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    transform(recepies: any): any {
        let sorted = recepies.sort((a,b)=> a.id - b.id);

        return sorted.reverse();
    }
}