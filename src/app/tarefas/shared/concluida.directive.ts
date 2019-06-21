import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appConcluida]'
})
export class ConcluidaDirective implements OnInit{

  @Input() appConcluida: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if(this.appConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through"
    }
  }
}
