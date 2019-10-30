import { Component, OnInit } from '@angular/core';
import {Service} from "../service";

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
  locationList;
  cityList;
  searchText: string;

  constructor(public locationService: Service) { }

  ngOnInit() {
    this.locationList = this.locationService.getLocations().subscribe(res => (this.locationList = res));
    for (let i = 0; i < this.locationList.length; i++) {
      this.cityList[i] = this.locationList[i].payload.doc.data().City;
      console.log(this.cityList.length);
    }
  }
}
