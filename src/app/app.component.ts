import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  template: `
    <fsi-header></fsi-header>
    <router-outlet (deactivate)="onDeactivate()"></router-outlet>
    <fsi-footer></fsi-footer>
  `,
  styles: ['']
})

export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCNRPpbtZx3Nn7Cbc_ysI_cGt1eto6gbIw",
      authDomain: "flight-school-institute.firebaseapp.com",
    });
  }
  
  onDeactivate() {
    document.body.scrollTop = 0;
  }
}