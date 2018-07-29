import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const QUESTIONARE_ID = 'tp-good-britance';

@Injectable()
export class QuestionareProvider {
  questionareUUID: string;
  questionareData: any;

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {
    this.questionareUUID = QUESTIONARE_ID;
  }

  getQuestionare(resetCache = false) {
    let newQuestionareData;

    return this.http.get('/assets/questions/questions.json').toPromise()
      .then((_questionareData) => newQuestionareData = _questionareData)
      .then(() => this.storage.get(this.questionareUUID))
      .then((data) => {
        if (resetCache || !data || newQuestionareData.version !== data.version) {
          this.questionareData = newQuestionareData;
          return this.storage.set(this.questionareUUID, newQuestionareData);
        }
        this.questionareData = data;
      })
      .then(() => this.questionareData);
  }

  getQuestionByUUID(uuid) {
    let question = this.questionareData.questions.find((question) => question.uuid === uuid);
    return Promise.resolve(question);
  }

  saveAnswerForQuestion(answerUUID, questionUUID) {
    let question = this.questionareData.questions.find((question) => question.uuid === questionUUID);
    question.answer = answerUUID;
    return this.storage.set(this.questionareUUID, this.questionareData);
  }

  resetQuestionare() {
    return this.getQuestionare().then((questionare) => {
      questionare.questions = questionare.questions.map((question) => Object.assign({}, question, { answer: null }));
      this.storage.set(this.questionareUUID, questionare);
    });
  }
}
