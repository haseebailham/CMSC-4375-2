import {Component} from '@angular/core';
import {Router, Params} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthserviceService} from '../shared/authservice.service';
import * as firebase from 'firebase';
import {ErrorComponent} from "../shared/error.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    public authserviceService: AuthserviceService,
    private router: Router,
    private fb: FormBuilder,
    private  dialog: MatDialog
  ) {
    this.createForm();
  }
  clearForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.authserviceService.doFacebookLogin()
      .then(res => {
          this.router.navigate(['/home']);
        }, err => console.log(err)
      );
  }


  tryGoogleLogin() {
    this.authserviceService.doGoogleLogin()
      .then(res => {
          this.router.navigate(['/home']);
        }, err => console.log(err)
      );
  }

  tryRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    })
    // if login is successful we will go to home page (change to ?)
      .then(res => {
          this.router.navigate(['/home']);
          console.log(res);
          this.errorMessage = '';
          this.successMessage = 'You have created and account!';
        },
        // error in login to console
        err => {
          console.log(err);
          this.clearForm();
          this.dialog.open(ErrorComponent, {
            data: {
              message: 'That Email is already in use!'
            }
          });
          this.errorMessage = err.message;
          this.successMessage = '';
        });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter in a email' :
      this.email.hasError('email') ? 'Not a valid email!' :
        '';
  }
}
