import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { QuestionareProvider } from '../../providers/questionare/questionare';

@IonicPage({
  segment: 'questionare/:id'
})
@Component({
  selector: 'page-questionare',
  templateUrl: 'questionare.html',
})
export class QuestionarePage {
  showQuestion: boolean = false;
  questionNumber: number = 1;
  questions: any = [];
  question: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public questionareProvider: QuestionareProvider
  ) {
    this.questionNumber = parseInt(this.navParams.data.id, 10);
    this.questionareProvider.getQuestions()
      .then((questions) => this.questions = questions)
      .then(() => this.getQuestion())
  }

  getQuestion() {
    this.questionareProvider.getQuestionByIndex(this.questionNumber)
      .then((question) => this.question = question)
      .then(() => {
        this.showQuestion = true;
      });
  }

  onSelectedAnswer(answer) {
    // store the result

    // go to next question
    if (this.questionNumber < this.questions.length) {
      this.navCtrl.push('QuestionarePage', {id: this.questionNumber + 1});
      return;
    }

    // show results screen

  }
}
