import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'meter'
})
export class MeterPipe implements PipeTransform {

    transform(height: number): number {
        return height / 10;
    }
}
