import { Component, Input, OnInit } from '@angular/core';
import { IxCard } from './IxCard';

@Component({
  selector: 'lib-ix-icon-box',
  templateUrl: './ix-icon-box.component.html',
  styleUrls: ['./ix-icon-box.component.scss']
})
export class IxIconBoxComponent implements OnInit {
  @Input() cards: IxCard[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}