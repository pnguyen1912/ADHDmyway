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
{
title: 'Report',
url: '/report',
 icon: 'contact'
 },
{
title: 'Setting',
url: '/setting',
 icon: 'cog'
 },
  ];
a : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    // this.timer();
  }
// time = 0;
//   timer(){
//     this.a = setInterval(()=>{
//       console.log(this.time)
//       this.time = this.time + 1;
      
//     },1000)
//   }
//   stoptime(){
//     clearInterval(this.a)
//   }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
