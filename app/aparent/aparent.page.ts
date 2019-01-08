
import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
// import {ModalPage} from '../modal/modal.page';

@Component({
  selector: 'app-parent',
  templateUrl: './aparent.page.html',
  styleUrls: ['./aparent.page.scss'],
})
export class AparentPage {

  constructor(public modalController: ModalController) { }

  // async emo() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage,
  //     componentProps: { Title: "Emotions",
  //                     message: "User's Emotions Graph"}
  //   });
  //   return await modal.present();
  // }



}