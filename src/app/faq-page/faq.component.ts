import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-faq-page',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class FaqComponent implements OnInit {
  // @ts-ignore
  page = {
    title: 'Frequently Asked Questions',
    subtitle: 'View some of our most frequently asked questions by our users!',
    content: '//Will fill out later with sample FAQ'
    // can potentially include an image
  }
  constructor() {}
  ngOnInit() {}
}
