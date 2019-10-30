import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Service} from '../../service';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component  {

  private blogList;
  constructor(private route: Router,
              public blogService: Service) {
    this.blogList = this.blogService.getBlogTitles().subscribe(res => (this.blogList = res));
  }
}
