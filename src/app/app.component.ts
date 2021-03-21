import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuState = 'close';
  openMenu() {
    this.menuState = 'open';
  }
  closeMenu() {
    this.menuState = 'close';
  }
}
