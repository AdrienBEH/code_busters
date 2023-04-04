import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'order'
})
export class OrderPipe implements PipeTransform {
    transform(order: number): string {
        return order.toString().length >= 5 ? `#${order}` : `#${'0'.repeat(4 - order.toString().length)}${order}`;
    }
}
