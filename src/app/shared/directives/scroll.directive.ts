import { Directive, ElementRef, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * Sends an event when the directive's element is scrolled.
 */
@Directive({
    selector: '[appScrollable]'
})
export class ScrollDirective {
    private readonly _elementScrolled$: Subject<Event> = new Subject;
    public readonly elementScrolled$: Observable<Event> = this._elementScrolled$.asObservable();
  
    constructor(public elementRef: ElementRef) {
        this.elementRef.nativeElement.style['overflow'] = 'auto';
    }

    @HostListener('scroll', ['$event'])
    private elementScrolled(event: Event) {
        this._elementScrolled$.next(event);
    }

    /**
     * Measures the scroll offset relative to the specified edge of the viewport.
     * @todo Implement [from='left'].
     * @todo Implement [from='right'].
     * @todo Implement [format='absolute'].
     * @todo Implement [format='relative'].
     * 
     * @param {'bottom'|'left'|'right'|'top'} [from='top'] - The edge to measure from.
     * @param {'absolute'|'relative'} [format='absolute'] - The fromat of to measure where:
     * - absolute: correspond to pixel format value.
     * - relative: correspond to percent format value.
     * @returns {number} The scroll offset in absolute or relative value relative to the specified edge of the viewport.
     */
    public measureScrollOffset(
        from: 'bottom'|'left'|'right'|'top' = 'top',
        format: 'absolute'|'relative' = 'absolute'
    ): number {
        switch (from) {
            case 'top':
                return this.elementRef.nativeElement.scrollTop
            case 'left':
                return 0;
            case 'right':
                return 0;
            case 'bottom':
                return this.elementRef.nativeElement.scrollHeight - (this.elementRef.nativeElement.scrollTop + this.elementRef.nativeElement.offsetHeight);
        }
    }
}
