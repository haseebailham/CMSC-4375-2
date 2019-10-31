import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Service} from "../service";

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  questionForm: FormGroup;
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
