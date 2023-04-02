import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'gram'
})
export class GramPipe implements PipeTransform {
    transform(weight: number): number {
        return weight / 10;
    }
}
