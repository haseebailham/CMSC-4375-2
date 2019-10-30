import { Component} from '@angular/core';
import {Question} from "./question";
import * as firebase from 'firebase';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {

  model = new Question('Name', 'Email Address', 'Question');
  submitted = false;
  onSubmit() {this.submitted = true;}
}
