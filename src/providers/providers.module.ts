import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { QuestionareProvider } from './questionare/questionare';
import { UserProvider } from './user/user';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    QuestionareProvider,
    UserProvider
  ]
})
export class ProvidersModule {}
