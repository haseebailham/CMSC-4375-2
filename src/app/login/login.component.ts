import {Component} from '@angular/core';
import {Router, Params} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthserviceService} from '../shared/authservice.service';
import * as firebase from 'firebase';

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
    private fb: FormBuilder
  ) {
    this.createForm();
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
        this.router.navigate(['']);
      });
  }


  tryGoogleLogin() {
    this.authserviceService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['']);
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
          console.log(err);
          this.errorMessage = err.message;
        });
  }
}
