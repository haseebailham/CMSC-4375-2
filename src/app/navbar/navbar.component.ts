import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/home']);
  }
  goSurvey() {
    this.router.navigate(['/survey']);
  }
  goFeedback() {
    this.router.navigate(['/feedback']);
  }
  goAbout() {
    this.router.navigate(['/about']);
  }
  goFAQ() {
    this.router.navigate(['/faq']);
  }
  goBlog() {
    this.router.navigate(['/blogs']);
  }
  goLocation() {
    this.router.navigate(['/home']);
  }

}
