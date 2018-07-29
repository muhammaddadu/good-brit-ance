import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { QuestionareProvider } from '../../providers/questionare/questionare';

@IonicPage({
  segment: 'questionare/:uuid'
})
@Component({
  selector: 'page-questionare',
  templateUrl: 'questionare.html',
})
export class QuestionarePage {
  showQuestion: boolean = false;
  selectedQuestionUUID: string;
  pageTitle: string = '';

  questionare: any = [];
  selectedQuestion: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public questionareProvider: QuestionareProvider
  ) {
    this.selectedQuestionUUID = this.navParams.get('uuid');

    this.questionareProvider.getQuestionare()
      .then((questionare) => this.questionare = questionare)
      .then(() => this.questionareProvider.getQuestionByUUID(this.selectedQuestionUUID))
      .then((selectedQuestion) => this.selectedQuestion = selectedQuestion)
      .then(() => {
        let questionsDone = this.questionare.questions.filter(_ => _.answer !== null).length + 1;
        this.pageTitle = 'QUESTION ' + questionsDone + '/' + this.questionare.questions.length;
        this.showQuestion = true;
      });
  }

  onUserSelectAnswer(answer) {
    this.saveUserAnswer(answer)
      .then(() => this.goToNextQuestion())
      .then((showResults) => this.goToResults(showResults))
      .catch(() => {});
  }

  saveUserAnswer(answer) {
    return this.questionareProvider.saveAnswerForQuestion(answer.id, this.selectedQuestionUUID);
  }

  exit() {
    this.navCtrl.setRoot('IntroductionPage');
    this.navCtrl.goToRoot({});
  }

  goToNextQuestion() {
    this.questionareProvider.getQuestionare().then((questionare) => {
      let questionsLeft = this.questionare.questions.filter(_ => _.answer === null);

      if (questionsLeft.length === 0) {
        return Promise.resolve(true);
      }

      let nextQuestion = questionsLeft[0];
      this.navCtrl.push('QuestionarePage', { uuid: nextQuestion.uuid });
    });
  }

  goToResults(showResults) {
    if (!showResults) {
      return;
    }
    let tally = this.questionare.questions.map(_ => parseInt(_.answer, 10)).reduce((a, b) => a + b, 0);
    console.log('tally', tally);
  }
}
