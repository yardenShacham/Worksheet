import {Component, OnInit} from '@angular/core';
import {IHeaderNode} from '@Worksheet/shared-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  headerNodes: IHeaderNode[] = [{
    nodeUrl: '/',
    nodeLabelName: 'Home'
  }, {
    nodeUrl: 'https://www.google.com',
    nodeLabelName: 'Google'
  }];

  ngOnInit() {
  }
}
