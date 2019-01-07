import {
  Component,
  OnInit
} from '@angular/core';
import {
  ApiService
} from '../api.service';
import {
  Router
} from '@angular/router';
import {
  Calendar
} from '@ionic-native/calendar/ngx';
import {
  AlertController,
  Button,
  Buttons
} from '@ionic/angular';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.page.html',
  styleUrls: ['./reward.page.scss'],
})
export class RewardPage implements OnInit {


  // public userselect = this.api.User.select;
  constructor(public router: Router,
    private api: ApiService,
    private calendar: Calendar,
    private alertCtrl: AlertController) {}

  async moneyAlert() {
    const alert = await this.alertCtrl.create({
      header: 'You know damn well you didn"t have enough'
    })
    await alert.present();
  }

  async presentAlert() {
    let eq = document.getElementById('equip')
    let eq1 = document.getElementById('equipped')
    const alert = await this.alertCtrl.create({
      header: 'It costs ⭐200, are you sure?',
      buttons: [{
          text: 'Cancel',
          handler: data => {
            console.log('canceled')
          }
        },
        {

          text: 'Buy',
          handler: data => {
            if (this.api.User.stars >= 200) {
              this.api.User.stars = this.api.User.stars - 200;
              console.log(this.api.User.stars)
              console.log('Bought')
              eq.innerHTML = 'Unequip'
              eq1.style.display = 'block';
              this.api.User.boot = true;
              console.log(this.api.User.boot)
              if (this.api.User.select == 1) {
                this.api.User.select = 11;
              } else if (this.api.User.select == 2) {
                this.api.User.select = 22;
              } else if (this.api.User.select == 3) {
                this.api.User.select = 33;
              } else if (this.api.User.select == 4) {
                this.api.User.select = 44;
              } else if (this.api.User.select == 5) {
                this.api.User.select = 55;
              } else if (this.api.User.select == 6) {
                this.api.User.select = 66;
              } else if (this.api.User.select == 111) {
                this.api.User.select = 1111;
              } else if (this.api.User.select == 222) {
                this.api.User.select = 2222;
              } else if (this.api.User.select == 333) {
                this.api.User.select = 3333;
              } else if (this.api.User.select == 444) {
                this.api.User.select = 4444;
              } else if (this.api.User.select == 555) {
                this.api.User.select = 5555;
              } else if (this.api.User.select == 666) {
                this.api.User.select = 6666;
              }
              console.log(this.api.User.select)
              let hide = document.getElementById('200')
              hide.style.display = 'none'
            } else {
              this.moneyAlert();
              console.log('Not enough money')
            }
          }
        }
      ]
    })

    alert.onDidDismiss().then(() => {
      console.log('stuff is dismissed');
    })

    await alert.present();
  }


  async presentAlert1() {
    let glv = document.getElementById('glovee')
    let glvd = document.getElementById('gloveed')
    const alert = await this.alertCtrl.create({
      header: 'It costs ⭐300, are you sure?',
      buttons: [{
          text: 'Cancel',
          handler: data => {
            console.log('canceled')
          }
        },
        {

          text: 'Buy',
          handler: data => {
            if (this.api.User.stars >= 300) {
              this.api.User.stars = this.api.User.stars - 300;
              console.log(this.api.User.stars)
              console.log('Bought')
              glv.innerHTML = 'Unequip'
              glvd.style.display = 'block';
              this.api.User.glove = true;
              console.log(this.api.User.glove)
              if (this.api.User.select == 1) {
                this.api.User.select = 111;
              } else if (this.api.User.select == 2) {
                this.api.User.select = 222;
              } else if (this.api.User.select == 3) {
                this.api.User.select = 333;
              } else if (this.api.User.select == 4) {
                this.api.User.select = 444;
              } else if (this.api.User.select == 5) {
                this.api.User.select = 555;
              } else if (this.api.User.select == 6) {
                this.api.User.select = 666;
              } else if (this.api.User.select == 11) {
                this.api.User.select = 1111;
              } else if (this.api.User.select == 22) {
                this.api.User.select = 2222;
              } else if (this.api.User.select == 33) {
                this.api.User.select = 3333;
              } else if (this.api.User.select == 44) {
                this.api.User.select = 4444;
              } else if (this.api.User.select == 55) {
                this.api.User.select = 5555;
              } else if (this.api.User.select == 66) {
                this.api.User.select = 6666;
              }
              console.log(this.api.User.select)
              let hide = document.getElementById('300')
              hide.style.display = 'none'

            } else {
              this.moneyAlert();
              console.log('Not enough money')
            }
          }
        }
      ]
    })

    alert.onDidDismiss().then(() => {
      console.log('stuff is dismissed');
    })

    await alert.present();
  }
  shoe() {
    let eq = document.getElementById('equip')
    let eq1 = document.getElementById('equipped')
    if (eq.innerHTML == 'Buy') {
      this.presentAlert();

    }

    if (eq.innerHTML == 'Equip') {
      eq.innerHTML = 'Unequip';
      eq1.style.display = 'block';
      if (this.api.User.select == 1) {
        this.api.User.select = 11;
      } else if (this.api.User.select == 2) {
        this.api.User.select = 22;
      } else if (this.api.User.select == 3) {
        this.api.User.select = 33;
      } else if (this.api.User.select == 4) {
        this.api.User.select = 44;
      } else if (this.api.User.select == 5) {
        this.api.User.select = 55;
      } else if (this.api.User.select == 6) {
        this.api.User.select = 66;
      } else if (this.api.User.select == 111) {
        this.api.User.select = 1111;
      } else if (this.api.User.select == 222) {
        this.api.User.select = 2222;
      } else if (this.api.User.select == 333) {
        this.api.User.select = 3333;
      } else if (this.api.User.select == 444) {
        this.api.User.select = 4444;
      } else if (this.api.User.select == 555) {
        this.api.User.select = 5555;
      } else if (this.api.User.select == 666) {
        this.api.User.select = 6666;
      }
      console.log(this.api.User.select)
    } else if (eq.innerHTML == 'Unequip') {
      eq.innerHTML = 'Equip';
      eq1.style.display = 'none';
      if (this.api.User.select == 11) {
        this.api.User.select = 1;
      } else if (this.api.User.select == 22) {
        this.api.User.select = 2;
      } else if (this.api.User.select == 33) {
        this.api.User.select = 3;
      } else if (this.api.User.select == 44) {
        this.api.User.select = 4;
      } else if (this.api.User.select == 55) {
        this.api.User.select = 5;
      } else if (this.api.User.select == 66) {
        this.api.User.select = 6;
      } else if (this.api.User.select == 1111) {
        this.api.User.select = 111;
      } else if (this.api.User.select == 2222) {
        this.api.User.select = 222;
      } else if (this.api.User.select == 3333) {
        this.api.User.select = 333;
      } else if (this.api.User.select == 4444) {
        this.api.User.select = 444;
      } else if (this.api.User.select == 5555) {
        this.api.User.select = 555;
      } else if (this.api.User.select == 6666) {
        this.api.User.select = 666;
      }
    }
    console.log(this.api.User.select)
  }
  glove() {
    let glv = document.getElementById('glovee')
    let glvd = document.getElementById('gloveed')
    if (glv.innerHTML == 'Buy') {
      this.presentAlert1();

    }

    if (glv.innerHTML == 'Equip') {
      glv.innerHTML = 'Unequip';
      glvd.style.display = 'block';
      if (this.api.User.select == 1) {
        this.api.User.select = 111;
      } else if (this.api.User.select == 2) {
        this.api.User.select = 222;
      } else if (this.api.User.select == 3) {
        this.api.User.select = 333;
      } else if (this.api.User.select == 4) {
        this.api.User.select = 444;
      } else if (this.api.User.select == 5) {
        this.api.User.select = 555;
      } else if (this.api.User.select == 6) {
        this.api.User.select = 666;
      } else if (this.api.User.select == 11) {
        this.api.User.select = 1111;
      } else if (this.api.User.select == 22) {
        this.api.User.select = 2222;
      } else if (this.api.User.select == 33) {
        this.api.User.select = 3333;
      } else if (this.api.User.select == 44) {
        this.api.User.select = 4444;
      } else if (this.api.User.select == 55) {
        this.api.User.select = 5555;
      } else if (this.api.User.select == 66) {
        this.api.User.select = 6666;
      }
      console.log(this.api.User.select)
    } else if (glv.innerHTML == 'Unequip') {
      glv.innerHTML = 'Equip';
      glvd.style.display = 'none';
      if (this.api.User.select == 111) {
        this.api.User.select = 1;
      } else if (this.api.User.select == 222) {
        this.api.User.select = 2;
      } else if (this.api.User.select == 333) {
        this.api.User.select = 3;
      } else if (this.api.User.select == 444) {
        this.api.User.select = 4;
      } else if (this.api.User.select == 555) {
        this.api.User.select = 5;
      } else if (this.api.User.select == 666) {
        this.api.User.select = 6;
      } else if (this.api.User.select == 1111) {
        this.api.User.select = 11;
      } else if (this.api.User.select == 2222) {
        this.api.User.select = 22;
      } else if (this.api.User.select == 3333) {
        this.api.User.select = 33;
      } else if (this.api.User.select == 4444) {
        this.api.User.select = 44;
      } else if (this.api.User.select == 5555) {
        this.api.User.select = 55;
      } else if (this.api.User.select == 6666) {
        this.api.User.select = 66;
      }
    }
    console.log(this.api.User.select)
  }

  async characAlert() {
    const alert = await this.alertCtrl.create({
      header: 'It costs ⭐2000, are you sure?',
      buttons: [{
          text: 'Cancel',
          handler: data => {
            console.log('canceled')
          }
        },
        {
          text: 'Buy',
          handler: () => {
            if (this.api.User.stars >= 2000) {
              this.api.User.stars = this.api.User.stars - 2000;
              console.log(this.api.User.stars);
              this.router.navigate(['/acharacter'])
            } else {
              this.moneyAlert();
            }
          }
        }
      ]
    })
    await alert.present();
  }

  charac() {
    this.characAlert();
  }
  
  ngOnInit() {
    let eq = document.getElementById('equip')
    let eq1 = document.getElementById('equipped')
    let glv = document.getElementById('glovee')
    let glvd = document.getElementById('gloveed')
    if (this.api.User.glove == true && this.api.User.select > 0 && this.api.User.select < 10) {
      glv.innerHTML = 'Equip'
      glvd.style.display = 'none';
      let hide = document.getElementById('300')
      hide.style.display = 'none';
    } else if (this.api.User.glove == true && this.api.User.select > 10 && this.api.User.select < 100) {
      glv.innerHTML = 'Unequip'
      glvd.style.display = 'block';
      let hide = document.getElementById('300')
      hide.style.display = 'none';
    } else if (this.api.User.glove == true && this.api.User.select > 110 && this.api.User.select < 1000) {
      glv.innerHTML = 'Equip'
      glvd.style.display = 'none';
      let hide = document.getElementById('300')
      hide.style.display = 'none';
    } else if (this.api.User.glove == true && this.api.User.select > 1000 && this.api.User.select < 10000) {
      glv.innerHTML = 'Unequip'
      glvd.style.display = 'block';
      let hide = document.getElementById('300')
      hide.style.display = 'none';
    }
    if (this.api.User.boot == true && this.api.User.select > 0 && this.api.User.select < 10) {
      eq.innerHTML = 'Equip'
      eq1.style.display = 'none';
      let hide = document.getElementById('200')
      hide.style.display = 'none';
    } else if (this.api.User.boot == true && this.api.User.select > 10 && this.api.User.select < 100) {
      eq.innerHTML = 'Unequip'
      eq1.style.display = 'block';
      let hide = document.getElementById('200')
      hide.style.display = 'none';
    } else if (this.api.User.boot == true && this.api.User.select > 100 && this.api.User.select < 1000) {
      eq.innerHTML = 'Equip'
      eq1.style.display = 'none';
      let hide = document.getElementById('200')
      hide.style.display = 'none';
    } else if (this.api.User.boot == true && this.api.User.select > 1000 && this.api.User.select < 10000) {
      eq.innerHTML = 'Unequip'
      eq1.style.display = 'block';
      let hide = document.getElementById('200')
      hide.style.display = 'none';
    }



  }
  // let g1 = document.getElementById('g1')
  // let g2 = document.getElementById('g2')
  //   let g3 = document.getElementById('g3')
  //   let b1 = document.getElementById('b1')
  //   let b2 = document.getElementById('b2')
  //   let b3 = document.getElementById('b3')
  //   if (this.userselect == 1){
  //     g1.style.display = 'block';
  //     console.log(this.userselect)
  //   } else if (this.userselect ==2){
  //     g2.style.display = 'block';console.log(this.userselect)
  //   } 
  //      else if (this.userselect ==3){
  //     g3.style.display = 'block';console.log(this.userselect)
  //   } 
  //      else if (this.userselect ==4){
  //     b1.style.display = 'block';console.log(this.userselect)
  //   } 
  //      else if (this.userselect ==5){
  //     b2.style.display = 'block';console.log(this.userselect)
  //   } 
  //      else if (this.userselect ==6){
  //     b3.style.display = 'block';console.log(this.userselect)
  //   } 


  // change(){
  //   this.router.navigate(['/acharacter'])
  // }
  // getdata(){
  //   const theData = this.api.getMethod('people');
  //   // this.FirstName = theData[0];
  // }

  // move(){

  //   let hi=document.getElementById('hi');
  //   let me=document.getElementById('me');
  //   let tmr=document.getElementById('tmr');
  //   hi.append(tmr);
  // }
  // add10(){
  //   this.api.select = this.api.select+10;
  // }
  // print(){
  //   console.log(this.api.select)
  // }
}