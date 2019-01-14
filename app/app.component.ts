import {
  Component
} from '@angular/core';

import {
  Platform
} from '@ionic/angular';
import {
  SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
  StatusBar
} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [{
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Task',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'myMap',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'myStar',
      url: '/reward',
      icon: 'star'
    },
    {
      title: 'Journal',
      url: '/journal',
      icon: 'book'
    },
    // {
    //   title: 'Wellness',
    //   url: '/well',
    //   icon: 'heart'
    // },
    {
      title: 'Report',
      url: '/report',
      icon: 'contact'
    },
    {
      title: 'Settings',
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