import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  start() {
    this.navCtrl.push('QuestionarePage', {id: 1});
  }
}
