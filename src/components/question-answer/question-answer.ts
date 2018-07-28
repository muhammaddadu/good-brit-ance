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
  inputs: ['selectedQuestionNumber', 'selectedQuestion', 'questions']
})
export class QuestionAnswerComponent {
  questions: any = [];
  selectedQuestionNumber: number;
  selectedQuestion: any = {};
  @Output() selectedAnswer = new EventEmitter<any>();

  constructor() {}

  selectAnswer(answer) {
    this.selectedAnswer.emit(answer);
  }
}
