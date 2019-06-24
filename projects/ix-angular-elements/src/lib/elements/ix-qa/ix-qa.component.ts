import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './ix-qa.component.html',
  styleUrls: ['./ix-qa.component.scss']
})
export class IxQAComponent implements OnInit {
  @Input() question;
  @Input() options;
  @Input() answer: number;
  @Input('answer-explanation') answerExplanation;

  public isCorrectAnswer = false;
  public isDirty = false;

  constructor() { }

  ngOnInit() {
  }

  getQuestion() {
    return this.question;
  }

  getOption(option) {
    if (this.options == undefined) return "";
    return this.options[option-1];
  }

  getAnswerExplanation() {
    return this.answerExplanation;
  }

  evaluateOption(option: number) {
    this.isDirty = true;

    if (option == this.answer) 
      this.isCorrectAnswer = true;
    else this.isCorrectAnswer = false;
  }

}
