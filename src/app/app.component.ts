import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { BackandService } from '@backand/angular2-sdk'

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
// @Component({
//   template: `<h1>Hello World!</h1>`
// })
export class MyApp {
  rootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private backand:BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      backand.init({
        appName: 'PLoT',
        signUpToken: '8fdddf18-e1a5-453d-9aad-12a12e4d1e00',
        anonymousToken: 'd7aec463-ba23-42bb-b62a-ad05194deebb',
        runSocket: true,
        mobilePlatform: 'ionic'
      });
      this.rootPage = TabsPage;
    });
  }
}
