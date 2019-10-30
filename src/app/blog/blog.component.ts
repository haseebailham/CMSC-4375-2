import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Service} from '../service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
private blogList;
  constructor(private route: Router,
              public blogService: Service) {
    this.blogList = this.blogService.getBlogTitles().subscribe(res => (this.blogList = res));
  }

  ngOnInit() {


  }

}
