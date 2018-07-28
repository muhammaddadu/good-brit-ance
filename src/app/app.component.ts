import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroductionPage } from '../pages/introduction/introduction';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    platform.ready().then(() => this.onPlatformReady);
  }

  onPlatformReady() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }

  ngOnInit() {
    this.rootPage = IntroductionPage;
  }
}

