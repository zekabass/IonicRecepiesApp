import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'keys'
})

export class ObjKeys implements PipeTransform {
    /**
    * Returns enum string values by given number key.
    * @param value - Enum object.
	* @param args - passed arguments
    */
    transform(value: any, args: any[] = null): any {
        let keys = Object.keys(value)
        return keys.slice(keys.length / 2);
    }
}