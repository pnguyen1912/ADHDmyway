import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-well',
  templateUrl: './well.page.html',
  styleUrls: ['./well.page.scss'],
})
export class WellPage implements OnInit {
   count = HTMLElement
  constructor(public alertCtrl: AlertController) { }
  



  async testAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async moneyAlert() {
    const alert = await this.alertCtrl.create({
      header: 'You know damn well you didn"t have enough'
    })
    await alert.present();
  }
  
  countdown() {
    let count1 = document.getElementById('div111');
    
    let time = 4;
    
    let x = setInterval( ()=> {
        if (time > 0) {
            count1.innerHTML = `${time}`;
            time = time - 1;
        } else {
            
             this.moneyAlert();
            console.log('done')
        }
    }, 1000);
    setTimeout(function () {
        clearInterval(x);
    }, 5500);
}

  ngOnInit() {
  }

}
