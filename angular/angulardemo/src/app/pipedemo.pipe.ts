import {Pipe,PipeTransform} from '@angular/core';


@Pipe({
    name:'ConvertPipe'
})
export class PipeDemo implements PipeTransform{
    transform(value:number) : number {
        return (value*9/5)+32;
    }
}