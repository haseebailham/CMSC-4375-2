import {Component, OnInit} from '@angular/core';
import {Question} from "./question";
import * as firebase from 'firebase';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  model = new Question('Name', 'Email Address', 'Question');
  submitted = false;
  onSubmit() {this.submitted = true;}

  ngOnInit(): void {
  }

}
