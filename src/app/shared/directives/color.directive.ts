import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokeshowcase } from '../models';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges {
    @Input('appColor') color!: keyof typeof Pokeshowcase.TypeColors;

    constructor(private el: ElementRef) {}

    ngOnChanges(changes: SimpleChanges): void {
      this.el.nativeElement.style['background-color'] = Pokeshowcase.TypeColors[this.color];
      // this.el.nativeElement.style['color'] = '#fff';
      // switch (this.color) {
        
      // }
    }
}
