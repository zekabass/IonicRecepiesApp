import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})


export class FilterPipe implements PipeTransform {
    /**
    * Filter passed array by title that contains given string.
    * @param recepies - All recipes array.
	* @param term - Search word
    */
    transform(recepies: any, term: any): any {
        if (term === undefined) return recepies;
            
        return recepies.filter(function(recepie){
            return recepie.title.toLowerCase().includes(term.toLowerCase());
        })
    }
}