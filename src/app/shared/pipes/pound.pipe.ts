import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pound'
})
export class PoundPipe implements PipeTransform {
    transform(weight: number): number {
        return weight / 10 * 2.205;
    }
}
