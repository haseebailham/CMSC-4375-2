import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {Service} from '../service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  questionForm: FormGroup;
  // private comments: AngularFirestoreCollection<unknown>;
  private commentList;
  constructor(private formBuilder: FormBuilder,
              private route: Router,
              public fbService: Service) { }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      name: [''],
      email: [''],
      question: ['']
    });
    this.commentList = this.fbService.getAllComments().subscribe(res => (this.commentList = res));
  }
  readyForNextQuestion() {
    this.questionForm = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      question: new FormControl(''),
    });
  }
  onClickAddQuestion(questionValue) {
    this.fbService.createComments(questionValue).then(r => {
      this.readyForNextQuestion();
    });
  }
}
