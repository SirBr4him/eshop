import { Component, Input } from '@angular/core';

@Component({
  selector: 'eshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  cartCount: number;
}
