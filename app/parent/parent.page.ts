import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import {Router } from '@angular/router';
import {Calendar} from '@ionic-native/calendar/ngx';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})

export class ParentPage {

  constructor(public modalController: ModalController, public router: Router, private calendar: Calendar) { }

  // newStop() {
  //   stopwatch.getTime();
  //   stopwatch.start();
  //   stopwatch.stop();
  // }

  async emo() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { Title: "Emotions",
                      message: "Click here for Emotions graph",
                      text: "Download",
                    
                    }
    });
    return await modal.present();
  }

  async prog() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { Title: "Progress",
                      message: "Click for progress",
                    text: "Download"}
    });
    return await modal.present();
  }

  settings() {
    this.router.navigate(['/setting'])
  }

  addEvent () {
    this.calendar.createEventInteractively();
  }

  addMore() {
  this.calendar.openCalendar(new Date()).then(
    (msg) => { console.log(msg); },
    (err) => { console.log(err); }
  );
}

  chart() {
    this.router.navigate(['/chart']);
  }


// this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

// this.customDayShortNames = [
//   's\u00f8n',
//   'man',
//   'tir',
//   'ons',
//   'tor',
//   'fre',
//   'l\u00f8r'
// ];

// this.customPickerOptions = {
//   buttons: [{
//     text: 'Save',
//     handler: () => console.log('Clicked Save!')
//   }, {
//     text: 'Log',
//     handler: () => {
//       console.log('Clicked Log. Do not Dismiss.');
//       return false;
//     }
//   }]
// }


}



