import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightWithInput]'
})
export class HighlightWithInputDirective {

  @Input() color = 'yellow';

  constructor(private element: ElementRef) { 
  }

  @HostListener('mouseenter') addHighlight(){
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') removeHighlight(){
    this.element.nativeElement.style.backgroundColor = null;
  }

}
