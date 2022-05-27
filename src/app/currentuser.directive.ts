import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCurrentuser]'
})
export class CurrentuserDirective {

  constructor(private el: ElementRef) {
    
 }
 ngOnInit(){
  this.highlight(this.appCurrentuser);
}
 @Input() appCurrentuser:boolean=false;

highlight(flag:boolean){
if(flag){
  this.el.nativeElement.style.backgroundColor='blue';
  this.el.nativeElement.class='justify-content-end'
  
 
  
}
}
}