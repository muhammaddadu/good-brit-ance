import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the QuestionAnswerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question-answer',
  templateUrl: 'question-answer.html',
  inputs: ['title', 'selectedQuestion', 'questionare']
})
export class QuestionAnswerComponent {
  title: any = 'QUESTION 1/20';
  questionare: any = [];
  selectedQuestion: any = {};

  @Output() onUserSelectAnswer = new EventEmitter<any>();

  constructor() {}

  selectAnswer(answer) {
    let cssClass = answer.value > 0
      ? '--plus'
      : answer.value < 0
        ? '--minus'
        : '--nutral';

    answer.cssClass = cssClass;

    setTimeout(() => {
      this.onUserSelectAnswer.emit(answer);
    }, 100);
  }
}
