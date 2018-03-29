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
    imageUrl: 'assets/icon.jpg'
  },{
    nodeUrl: '/',
    nodeLabelName: 'Home'
  }, {
    nodeUrl: 'https://github.com/yardenShacham',
    nodeLabelName: 'Github Repository'
  }, {
    nodeUrl: 'https://il.linkedin.com/in/yarden-shcham-087163b3',
    nodeLabelName: 'Linkedin'
  }, {
    nodeUrl: null,
    nodeLabelName: 'yarden101111@gmail.com'
  }];

  ngOnInit() {
  }
}
