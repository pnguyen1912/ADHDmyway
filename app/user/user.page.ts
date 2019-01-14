import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
// import { HomePage } from '../home/home.page';
import {Router, Route} from '@angular/router';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {

  constructor(public router:Router,
      private api: RestapiService,
      private alertCtrl: AlertController) { }

 async welcome() {
  const alert = await this.alertCtrl.create({
   header: 'Welcome to ADHDmyway',
   message: "It seems you’ve woken up in the Safari and lets just say the desert is getting pretty hot. Your family's on a vacation and you seem to have gotten lost. Now we must find our way out of here so we can get back to the hotel.",
   buttons: [
     {
     text: 'Cancel',
     handler: data => {
       console.log('canceled')
     }
   },
   {
     text: 'Okay',
     handler: () =>{
       console.log('Confirm Okay')
  
     }
   }
 ]
})
alert.onDidDismiss().then( () => {
    console.log('stuff is dismissed');
 })
 await alert.present();
 }

 godash() {
   this.router.navigate(['../acharacter'])
 }



}