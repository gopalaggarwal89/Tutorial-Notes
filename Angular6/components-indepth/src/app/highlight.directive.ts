import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { 
  }

  @HostListener('mouseenter') addHighlight(){
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') removeHighlight(){
    this.element.nativeElement.style.backgroundColor = null;
  }

}
