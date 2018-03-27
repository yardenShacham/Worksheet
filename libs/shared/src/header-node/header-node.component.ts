import {Component, OnInit, Input} from '@angular/core';
import {IHeaderNode} from '@Worksheet/shared-models';

@Component({
  selector: 'header-node',
  templateUrl: './header-node.component.html',
  styleUrls: ['./header-node.component.scss']
})
export class HeaderNodeComponent implements OnInit {
  @Input() nodeInfo: IHeaderNode

  constructor() {
  }

  ngOnInit() {

  }

}
