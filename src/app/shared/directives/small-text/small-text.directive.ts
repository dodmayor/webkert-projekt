import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[smallText]'
})
export class SmallTextDirective {
  @HostBinding('style.font-size')
  fontSize: string = '0.75rem';

  constructor() {
  }
}
