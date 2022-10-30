import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  @Input() color: string = 'red';
  htmlElement: ElementRef<HTMLElement>;

  constructor(private elem: ElementRef<HTMLElement>) {
    this.htmlElement = this.elem;
  }

  ngOnInit(): void {
    this.setColor();
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this.color;
  }
}
