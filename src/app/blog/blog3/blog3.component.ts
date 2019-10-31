import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Service} from '../../service';

@Component({
  selector: 'app-blog3',
  templateUrl: './blog3.component.html',
  styleUrls: ['./blog3.component.css']
})
export class Blog3Component {

  private blogList;
  constructor(private route: Router,
              public blogService: Service) {
    this.blogList = this.blogService.getBlogTitles().subscribe(res => (this.blogList = res));
  }

}
