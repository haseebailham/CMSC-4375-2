import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Service} from '../../service';

@Component({
  selector: 'app-blog4',
  templateUrl: './blog4.component.html',
  styleUrls: ['./blog4.component.css']
})
export class Blog4Component {

  private blogList;
  constructor(private route: Router,
              public blogService: Service) {
    this.blogList = this.blogService.getBlogTitles().subscribe(res => (this.blogList = res));
  }
}
