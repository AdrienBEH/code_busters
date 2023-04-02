import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'foot'
})
export class FootPipe implements PipeTransform {
    transform(height: number): string {
        let inch = 100 * (height / 10) / 2.54 + 0 / 2.54;
        const feet: number = Math.floor(inch/12);
        inch = inch - 12 * feet;
        const inchRounded = Math.round(inch + Number.EPSILON);
        return `${feet}'${'0'.repeat(2 - inchRounded.toString().length)}${inchRounded}''`;
    }
}