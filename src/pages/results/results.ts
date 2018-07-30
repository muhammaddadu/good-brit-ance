import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionareProvider } from '../../providers/questionare/questionare';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  questionare: any;
  score: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public questionareProvider: QuestionareProvider
  ) {
    this.loadScore();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  loadScore() {
    return this.questionareProvider.getQuestionare()
      .then((questionare) => this.questionare = questionare)
      .then(() => {
        this.score = this.questionare.questions.map(question => {
          let answersIndex = question.answer;
          let answer = question.answers[answersIndex];

          console.log(answer);

          return parseInt(answer.value, 10);

        }).reduce((a, b) => a + b, 0);
      });
  }

  exit() {
    this.navCtrl.setRoot('IntroductionPage');
    this.navCtrl.popToRoot();
  }
}
