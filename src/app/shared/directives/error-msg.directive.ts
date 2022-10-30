import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  @Input() color: string = 'red';
  @Input() message: string = 'This field is required';
  htmlElement: ElementRef<HTMLElement>;

  constructor(private elem: ElementRef<HTMLElement>) {
    this.htmlElement = this.elem;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }

  setColor() {
    this.htmlElement.nativeElement.classList.add('error');
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.message;
  }
}
