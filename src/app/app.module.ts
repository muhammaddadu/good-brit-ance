import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '../components/components.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroductionPage } from '../pages/introduction/introduction';
import { QuestionarePageModule } from '../pages/questionare/questionare.module';

import { QuestionareProvider } from '../providers/questionare/questionare';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroductionPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    QuestionarePageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroductionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionareProvider
  ]
})
export class AppModule {}
