import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  private _color: string = 'red';
  private _message: string = 'The Field is requierd';

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
    // this.htmlElement.nativeElement.style.color = value;
  }

  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
    // this.htmlElement.nativeElement.innerText = value;
  }
  htmlElement: ElementRef<HTMLElement>;

  constructor(private elem: ElementRef<HTMLElement>) {
    this.htmlElement = this.elem;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setClass();
  }

  setClass() {
    this.htmlElement.nativeElement.classList.add('error');
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }
}
