import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Service} from '../service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUserForm: FormGroup;
  constructor( private formBuilder: FormBuilder,
               // private router: Router,
               public fbService: Service) { }

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['']
    });
  }
  nextUser(){
    this.newUserForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });
  }

  onClickAddButton(value){
    this.fbService.createUser(value).then(r => {this.nextUser(); });
  }
}
