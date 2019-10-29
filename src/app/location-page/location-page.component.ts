import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {

  // Local data for search in Locations page:
  dataset = ['Bali, Indonesia', 'Dubai, UAE', 'Srinagar, India', 'Crete, Greece', 'Rome, Italy',
    'Copenhagen, Denmark', 'Interlaken, Switzerland', 'Miami, US', 'Cancun, Mexico',
    'Alberta, Canada', 'Anchorage, US'];

  constructor() { }

  ngOnInit() {
  }

}
