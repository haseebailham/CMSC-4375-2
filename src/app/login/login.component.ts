import {Component} from '@angular/core';
import {Router, Params} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthserviceService} from '../shared/authservice.service';
import * as firebase from 'firebase';
import {MatDialog} from "@angular/material";
import {ErrorComponent} from "../shared/error.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // group for login values
  loginForm: FormGroup;
  errorMessage: '';

  constructor(
    public authserviceService: AuthserviceService,
    private router: Router,
    private fb: FormBuilder,
    private  dialog: MatDialog
  ) {
    this.createForm();
  }

  clearForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.authserviceService.doFacebookLogin()
      .then(res => {
        this.router.navigate(['/home']);
      });
  }


  tryGoogleLogin() {
    this.authserviceService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/home']);
      });
  }

  tryLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    })
    // if login is successful we will go to user profile page (change to home?)
      .then(res => {
          this.router.navigate(['/home']);
        },
        err => {
          this.clearForm();
          this.dialog.open(ErrorComponent, {
            data: {
              message: 'Your login Infomation is Incorrect!'
            }
          });
          console.log(err);
          this.errorMessage = err.message;
        });
  }
}
