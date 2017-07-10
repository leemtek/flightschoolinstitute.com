import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <fsi-header></fsi-header>
    <fsi-what></fsi-what>
    <fsi-about></fsi-about>
    <fsi-services></fsi-services>
    <fsi-join></fsi-join>
    <fsi-footer></fsi-footer>
    <router-outlet></router-outlet>
  `,
  styles: ['']
})

export class AppComponent {
  
}