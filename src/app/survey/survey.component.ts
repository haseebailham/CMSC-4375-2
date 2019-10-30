import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Service} from '../service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

export interface DialogData {
  vacation: 'x';
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  userAnswers = [];
  public q1: any;
  public q2: any;
  public q3: any;
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
  vacation: 'x';

  question3 = 'What price range are you looking at?';
  selectedAnswer3 = '';
  answers3 = [
    '$-$$',
    '$$$-$$$$'
  ];

  private locationList;
  private locToGo;

  constructor(
    private fb: FormBuilder, private service: Service, private router: Router, public dialog: MatDialog
  ) {
    this.getLocations();
  }

  getLocations = () => {
    return this.service
      .getLocations()
      .subscribe(res => (this.locationList = res));
  }

  getLocationByName(locName) {
    return this.service
      .getLocationByName(locName)
      .subscribe(res => (this.locToGo = res));
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

  openDialog(): void {
    this.onVacationButtonClick();
    console.log(this.vacation);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {vacation: this.vacation}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  decideVacation() {
    if (this.userAnswers.includes(this.answers1[0]) && this.userAnswers.includes(this.answers2[0]) && this.userAnswers.includes(this.answers3[0])) {
      this.vacation = 'Bali, Indonesia';
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
    this.clear();
    console.log(this.userAnswers.toString());
    this.decideVacation();
  }

  clear() {
    this.q1 = null;
    this.q2 = null;
    this.q3 = null;
  }
}

@Component({
  selector: `app-dialog-component`,
  templateUrl: './surveyDialog.html'
})
export class DialogComponent {
  //
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    console.log(this.data)
    this.dialogRef.close();
  }

}
