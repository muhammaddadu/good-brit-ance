import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { QuestionareProvider } from '../../providers/questionare/questionare';

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public questionareProvider: QuestionareProvider
  ) {}

  start() {
    this.questionareProvider.getQuestionare()
      .then(() => this.questionareProvider.resetQuestionare())
      .then(_ => this.navCtrl.push('QuestionarePage', { uuid: '1' }));
  }
}
