import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Service} from '../service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  userAnswers = [];

  question1 = 'Which continent do you want to travel to?';
  selectedAnswer1 = '';
  answers1 = [
    'Asia',
    'Europe',
    'The Americas'
  ];

  question2 = 'What climate do you prefer?';
  selectedAnswer2 = '';
  answers2 = [
    'Hot',
    'Cold'
  ];
  private vacation: string;

  question3 = 'What price range are you looking at?';
  selectedAnswer3 = '';
  answers3 = [
    '$-$$',
    '$$$-$$$$'
  ];
  questions = [this.question1, this.question2, this.question3];
  answers = [this.answers1, this.answers2, this.answers3];

  answersForm = new FormGroup({
    answer1: new FormControl(''),
    answer2: new FormControl(''),
  });
  answer1Form: FormGroup;
  private locList;
  private locToGo;

  constructor(
    private fb: FormBuilder, private service: Service
  ) {
    this.createForm();
    this.getLocations();
  }

  getLocations = () => {
    return this.service
      .getLocations()
      .subscribe(res => (this.locList = res));
  }
  getLocationByName(locName) {
    return this.service
      .getLocationByName(locName)
      .subscribe(res => (this.locToGo = res));
  }
  createForm() {
    this.answer1Form = this.fb.group({
      answer11: ['', Validators.required],
      answer12: ['', Validators.required],
      answer13: ['', Validators.required]
    });
  }

  answer1Event(event: any) {
    this.selectedAnswer1 = event.value;
    this.userAnswers.push(this.selectedAnswer1);
  }

  answer2Event(event: any) {
    this.selectedAnswer2 = event.value;
    this.userAnswers.push(this.selectedAnswer2);
  }

  answer3Event(event: any) {
    this.selectedAnswer3 = event.value;
    this.userAnswers.push(this.selectedAnswer3);
  }

  decideVacation() {
    if (this.userAnswers.includes(this.answers1[0]) && this.userAnswers.includes(this.answers2[0]) && this.userAnswers.includes(this.answers3[0])) {
      this.vacation = 'Bali, Indonesia';
      this.getLocationByName('Bali');
    } else if (this.userAnswers.includes(this.answers1[0]) && this.userAnswers.includes(this.answers2[0]) && this.userAnswers.includes(this.answers3[1])) {
      this.vacation = 'Dubai, UAE';
    } else if (this.userAnswers.includes(this.answers1[0]) && this.userAnswers.includes(this.answers2[1]) && this.userAnswers.includes(this.answers3[0])) {
      this.vacation = 'Srinagar, India';
    } else if (this.userAnswers.includes(this.answers1[0]) && this.userAnswers.includes(this.answers2[1]) && this.userAnswers.includes(this.answers3[1])) {
      this.vacation = 'Tokyo, Japan';
    } else if (this.userAnswers.includes(this.answers1[1]) && this.userAnswers.includes(this.answers2[0]) && this.userAnswers.includes(this.answers3[0])) {
      this.vacation = 'Crete, Greece';
    } else if (this.userAnswers.includes(this.answers1[1]) && this.userAnswers.includes(this.answers2[0]) && this.userAnswers.includes(this.answers3[1])) {
      this.vacation = 'Rome, Italy';
    } else if (this.userAnswers.includes(this.answers1[1]) && this.userAnswers.includes(this.answers2[1]) && this.userAnswers.includes(this.answers3[0])) {
      this.vacation = 'Copenhagen, Denmark';
    } else if (this.userAnswers.includes(this.answers1[1]) && this.userAnswers.includes(this.answers2[1]) && this.userAnswers.includes(this.answers3[1])) {
      this.vacation = 'Interlaken, Switzerland';
    } else if (this.userAnswers.includes(this.answers1[2]) && this.userAnswers.includes(this.answers2[0]) && this.userAnswers.includes(this.answers3[0])) {
      this.vacation = 'Miami, Florida';
    } else if (this.userAnswers.includes(this.answers1[2]) && this.userAnswers.includes(this.answers2[0]) && this.userAnswers.includes(this.answers3[1])) {
      this.vacation = 'Cancun, Mexico';
    } else if (this.userAnswers.includes(this.answers1[2]) && this.userAnswers.includes(this.answers2[1]) && this.userAnswers.includes(this.answers3[0])) {
      this.vacation = 'Alberta, Canada';
    } else if (this.userAnswers.includes(this.answers1[2]) && this.userAnswers.includes(this.answers2[1]) && this.userAnswers.includes(this.answers3[1])) {
      this.vacation = 'Anchorage, Alaska';
    }

  }

  onVacationButtonClick() {
    console.log(this.userAnswers.toString())
    this.decideVacation();
  }

}
