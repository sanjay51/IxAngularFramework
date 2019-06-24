import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

declare var Prism;

@Component({
  templateUrl: './ix-code.component.html',
  styleUrls: ['./ix-code.component.scss', 'prism/prism.css'],
  encapsulation: ViewEncapsulation.None
})
export class IxCodeComponent implements OnInit {
  @Input() code: string;
  @Input('pre-code') preCode: string;
  @Input('post-code') postCode: string;
  @Input() output: string;

  public isCompactMode = true;
  public state = "initial";

  constructor() { }

  ngOnInit() {
    this.getCode();
  }

  getCode() {
    return Prism.highlight(this.code, Prism.languages.python, 'python');
  }

  getOutput() {
    return this.output;
  }

  getFullCode() {
    let code = this.preCode + this.code + this.postCode;
    return Prism.highlight(code, Prism.languages.python, 'python');
  }

  shouldHaveFullMode(): boolean {
    if (this.preCode + this.postCode) return true;

    return false;
  }

  changeMode(mode) {
    this.isCompactMode = (mode == 'compact');
  }

  run() {
    this.state = "running";
    timer(1500).pipe(
      take(1)).subscribe(x => {
        this.state = "output";
      }
    )
   
  }

}
