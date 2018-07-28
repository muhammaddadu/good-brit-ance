import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionareProvider {
  questions: any;

  constructor(
    public http: HttpClient
  ) {}

  getQuestions() {
    if (this.questions) {
      return Promise.resolve(this.questions);
    }

    return this.http.get('/assets/questions/questions.json').toPromise()
      .then((response: any) => this.questions = response.questions);
  }

  getQuestionByIndex(index) {
    return this.getQuestions().then((questions) => this.questions[index - 1]);
  }
}
