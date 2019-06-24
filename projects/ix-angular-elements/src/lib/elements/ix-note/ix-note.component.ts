import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ix-note',
  templateUrl: './ix-note.component.html',
  styleUrls: ['./ix-note.component.scss']
})
export class IxNoteComponent implements OnInit {
  @Input() title;
  @Input() text;

  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    if (!this.title) return "";
    return this.title + ": ";
  }

  getText() {
    return this.text;
  }
}
