import {Component, OnInit} from '@angular/core';
import {IHeaderNode} from '@Worksheet/shared-models';
import {getNavigationOptions} from './app-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  headerNodes: IHeaderNode[] = [];

  ngOnInit() {
    this.headerNodes = getNavigationOptions();
  }
}
