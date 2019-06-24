import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './ix-post-heading.component.html',
  styleUrls: ['./ix-post-heading.component.scss']
})
export class IxPostHeadingComponent implements OnInit {
  @Input() text;

  constructor() { }

  ngOnInit() {
  }

  getText() {
    return this.text;
  }

}
