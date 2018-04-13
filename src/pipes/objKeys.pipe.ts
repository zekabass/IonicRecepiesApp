import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'keys'
})

export class ObjKeys implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        let keys = Object.keys(value)
        return keys.slice(keys.length / 2);
    }
}