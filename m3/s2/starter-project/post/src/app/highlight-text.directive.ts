import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {

  constructor(private ref:ElementRef) { }

  ngOnInit () {
    this.ref.nativeElement.style.backgroundColor = 'yellow';
  }

}
