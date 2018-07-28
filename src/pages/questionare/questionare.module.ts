import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionarePage } from './questionare';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    QuestionarePage
  ],
  imports: [
    IonicPageModule.forChild(QuestionarePage),
    ComponentsModule
  ],
})
export class QuestionarePageModule {}
