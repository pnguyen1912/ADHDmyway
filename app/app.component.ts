import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Task',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'myMap',
      url: '/map',
      icon: 'book'
    },
    {
      title: 'myStar',
      url: '/reward',
      icon: 'star'
    },
// {
// title: 'User',
// url: '/user',
//  icon: 'contact'
//  },
{
title: 'Setting',
url: '/setting',
 icon: 'cog'
 },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
