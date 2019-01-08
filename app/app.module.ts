import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http'
import {Camera} from '@ionic-native/camera/ngx'
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx'
import {Calendar} from '@ionic-native/calendar/ngx'
import {ModalPage} from './modal/modal.page';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { HomePage } from './home/home.page';
import { UserPage } from './user/user.page';

@NgModule({
  declarations: [ModalPage, AppComponent],
  entryComponents: [ModalPage],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    TextToSpeech,
    Calendar,
    PhotoLibrary,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
