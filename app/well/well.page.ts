import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-well',
  templateUrl: './well.page.html',
  styleUrls: ['./well.page.scss'],
})
export class WellPage implements OnInit {
   count1 = HTMLElement
  constructor(public alertController: AlertController) { }
  

clicked = false;

async moneyAlert() {
    const alert = await this.alertController.create({
      header: 'Exhale',
      buttons: ['Done']
    })
    await alert.present();
  } 
  countdown() {
      if (this.clicked == false){
          this.clicked = true;
    let count1 = document.getElementById('div11');
    let time = 4;
    let x = setInterval( () => {
        if (time >0) {
            let letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                console.log(color)
                count1.style.color = color;
            count1.innerHTML = `${time}`;
            time = time - 1;
        }
        if (time == 0) {
            console.log("hi cesar ")
        this.moneyAlert();
        }
    }, 1000);
    setTimeout(function () {
        clearInterval(x);
    }, 5500);
}
  
  else{ console.log('clicked')};
  }
  
  ngOnInit() {
  }

}
