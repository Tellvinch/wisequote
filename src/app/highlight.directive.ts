import { Directive,ElementRef ,HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem:ElementRef){}
  @Input() highlightColor:string;

  @HostListener("click") onClicks(){
    this.textDeco("highlight")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
      private textDeco(action:string){
        this.elem.nativeElement.style.backgroundColor = this.highlightColor;
        
  }

}
