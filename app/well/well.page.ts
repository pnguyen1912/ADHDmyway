import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-well',
  templateUrl: './well.page.html',
  styleUrls: ['./well.page.scss'],
})
export class WellPage implements OnInit {
   count = HTMLElement
  constructor(public alertController: AlertController) { }
  



  countdown() {
    let count1 = document.getElementById('div1');
    
    let time = 4;
    let x = setInterval(function () {
        if (time > 0) {
            count1.innerHTML = `${time}`;
            time = time - 1;
        } else {
            
            alert('Exhale')
        
        // this.presentAlert();
        
        }
    }, 1000);
    setTimeout(function () {
        clearInterval(x);
    }, 5500);
}

async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
