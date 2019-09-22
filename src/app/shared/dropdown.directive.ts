import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective{
 @HostBinding('class.open')  isClosed=false;
 @HostListener('click') toggleopen()
 {
     this.isClosed=!this.isClosed;
 }
}