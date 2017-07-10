import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <fsi-header></fsi-header>
    <router-outlet (deactivate)="onDeactivate()"></router-outlet>
    <fsi-footer></fsi-footer>
  `,
  styles: ['']
})

export class AppComponent {
  onDeactivate() {
    document.body.scrollTop = 0;
  }
}