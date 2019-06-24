import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ix-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
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
