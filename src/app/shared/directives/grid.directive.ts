import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appGrid]'
})
export class GridDirective implements OnChanges {
    @Input() gap: string = 'none';
    @Input() templateColumns: string = 'none';
    @Input() templateRow: string = 'none';

    constructor(private el: ElementRef) {
      this.el.nativeElement.style.display = 'grid';
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.el.nativeElement.style['grid-column-gap'] = this.gap;
        this.el.nativeElement.style['grid-row-gap'] = this.gap;
        this.el.nativeElement.style['grid-template-columns'] = this.templateColumns;
        this.el.nativeElement.style['grid-template-rows'] = this.templateRow;
    }
}
