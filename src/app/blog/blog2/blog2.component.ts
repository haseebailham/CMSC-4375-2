import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Service} from '../../service';

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.css']
})
export class Blog2Component {

  private blogList;
  constructor(private route: Router,
              public blogService: Service) {
    this.blogList = this.blogService.getBlogTitles().subscribe(res => (this.blogList = res));
  }

}
