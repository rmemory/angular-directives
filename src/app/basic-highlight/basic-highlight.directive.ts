import { Directive, ElementRef, OnInit } from '@angular/core';

// The square brackets used below allow me to use the appBasicHighlight
// without using square brackets in the code
@Directive( {
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective  implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
