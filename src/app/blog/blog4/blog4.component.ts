import { Component } from '@angular/core';
import {Service} from '../../service';

@Component({
  selector: 'app-blog4',
  templateUrl: './blog4.component.html',
  styleUrls: ['./blog4.component.css']
})
export class Blog4Component {

  private blogList;
  constructor(public blogService: Service) {
    this.blogList = this.blogService.getBlogTitles().subscribe(res => (this.blogList = res));
  }
}
