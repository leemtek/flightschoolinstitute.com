import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'signin',
  template: `
    <div class="row">
        <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
            <form (ngSubmit)="onSignin(f)" #f="ngForm">
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input type="email" id="email" name="email" ngModel class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    ngModel
                    class="form-control">
                </div>
                <button class="btn btn-primary" type="submit" [disabled]="!f.valid">Sign In</button>
            </form>
        </div>
    </div>
  `,
  styles: ['']
})

export class SigninComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() {

    }

    onSignin(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signinUser(email, password);
    }
  
}