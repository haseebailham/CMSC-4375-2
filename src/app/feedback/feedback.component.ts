import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {Service} from '../service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedbackForm: FormGroup;
  private commentList;
  constructor(private formBuilder: FormBuilder,
              private route: Router,
              public fbService: Service) { }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      comments: ['']
    });
    this.commentList = this.fbService.getAllComments().subscribe(res => (this.commentList = res));
  }
  readyForNextComment() {
    this.feedbackForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      comments: new FormControl(''),
    });
  }
  onClickAddComments(commentValue) {
    this.fbService.createComments(commentValue).then(r => {
      this.readyForNextComment();
    });
  }
}
