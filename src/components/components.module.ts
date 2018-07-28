import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCardActionComponent } from './page-card-action/page-card-action';
import { QuestionAnswerComponent } from './question-answer/question-answer';

@NgModule({
	declarations: [
		PageCardActionComponent,
		QuestionAnswerComponent
	],
	imports: [ CommonModule ],
	exports: [
		PageCardActionComponent,
		QuestionAnswerComponent
	]
})
export class ComponentsModule {}
