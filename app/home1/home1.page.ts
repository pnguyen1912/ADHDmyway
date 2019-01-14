import {
  Component
} from '@angular/core';
import {
  ModalController
} from '@ionic/angular';
import {
  AngularWaitBarrier
} from 'blocking-proxy/built/lib/angular_wait_barrier';
import {
  AlertController,
  ToastController
} from '@ionic/angular';
import {
  TextToSpeech
}
from '@ionic-native/text-to-speech/ngx'
import {  
  text
} from '@angular/core/src/render3';
import { RestapiService } from '../restapi.service';
import { Storage } from '@ionic/storage';
import { CognitoService } from '../cognito.service';
import { Button } from 'protractor';
// import { ApiService } from '../api.service';


@Component({
  selector: 'app-home1',
  templateUrl: 'home1.page.html',
  styleUrls: ['home1.page.scss'],  
})

export class Home1Page {
  public dashselect = this.api.User.select;

  constructor(
    private cog: CognitoService,
    private api: RestapiService, private tts: TextToSpeech, 
            private alertCtrl: AlertController, private toastCtrl: ToastController,
            private storage: Storage) {
              // console.log('Morning morning')
              // let a = setTimeout(() => {
                //   let div1=document.getElementById('div1')
                // div1.innerHTML = 'How are you today?';
                // let btn=document.getElementById('btn');
                //   btn.style.display = 'inline-block';
                //   this.tts.speak({
                  //     text: 'How are you today?',
                  //     locale: 'en-US',
                  //     rate: 1.6,
                  //   })  
                  // }, 3000);
                  
                }
                // username = this.cog.getAuthenticatedUser().getUsername();
  created:boolean = false;
  ngOnInit(){
    // this.loopArray.push('crazy', 'buddy', 'monkey');

    // const loopObject = {
    //   crazy: 'happy',
    //   buddy: 'monkey',
    //   friend: 'thoughts'  
    // };
    // let bg = document.getElementById('main');
    // bg.style.backgroundImage = ('assets/2.png')
    let char=document.getElementById('char');
    if (this.created == false){
      let chec = document.createElement('img');
     if (this.dashselect == 1) {
      chec.src = 'assets/girl1.png'
      console.log(this.dashselect)
    } else if (this.dashselect == 2) {
      chec.src = 'assets/girl2.png'
      console.log(this.dashselect)
    } else if (this.dashselect == 3) {
      chec.src = 'assets/girl3.png'
      console.log(this.dashselect)
    } else if (this.dashselect == 4) {
      chec.src = 'assets/boy1.png'
      console.log(this.dashselect)
    } else if (this.dashselect == 5) {
      chec.src = 'assets/boy2.png'
      console.log(this.dashselect)
    } else if (this.dashselect == 6) {
      chec.src = 'assets/boy3.png'
      console.log(this.dashselect)
    } else if (this.dashselect == 11) {
      chec.src = 'assets/girl1b.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 22) {
      chec.src = 'assets/girl2b.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 33) {
      chec.src = 'assets/girl3b.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 44) {
      chec.src = 'assets/boy1b.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 55) {
      chec.src = 'assets/boy2b.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 66) {
      chec.src = 'assets/boy3b.png'
      console.log(this.dashselect)
    } else if (this.dashselect == 111) {
      chec.src = 'assets/girl1g.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 222) {
      chec.src = 'assets/girl2g.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 333) {
      chec.src = 'assets/girl3g.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 444) {
      chec.src = 'assets/boy1g.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 555) {
      chec.src = 'assets/boy2g.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 666) {
      chec.src = 'assets/boy3g.png'
      console.log(this.dashselect)
    } else if (this.dashselect == 1111) {
      chec.src = 'assets/girl1bg.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 2222) {
      chec.src = 'assets/girl2bg.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 3333) {
      chec.src = 'assets/girl3bg.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 4444) {
      chec.src = 'assets/boy1bg.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 5555) {
      chec.src = 'assets/boy2bg.png'
      console.log(this.dashselect)
    }else if (this.dashselect == 6666) {
      chec.src = 'assets/boy3bg.png'
      console.log(this.dashselect)
    }
    char.appendChild(chec)
    let a= 1
    char.onclick = (async) => {
      if (a== 1){this.askwell(); a=a+1} 
      else if (a ==2) {this.askfood(); a=a+1}
      else if (a== 3) {this.askhow()}
    };
    char.style.display = 'inline-block';
    this.created = true;
    } else {
      console.log('already created')
    }
    // let g1 = document.getElementById('g1')
    // let g2 = document.getElementById('g2')
    // let g3 = document.getElementById('g3')
    // let b1 = document.getElementById('b1')
    // let b2 = document.getElementById('b2')
    // let b3 = document.getElementById('b3')
    // let g0 = document.getElementById('g0')
    // if (this.api.User.select == 1){
    //   g1.style.display = 'block';
    //   console.log(this.api.User.select)
    // } else if (this.api.User.select ==2){
    //   g2.style.display = 'inline-block';console.log(this.api.User.select)
    // } 
    //    else if (this.api.User.select ==3){
    //   g3.style.display = 'inline-block';console.log(this.api.User.select)
    // } 
    //    else if (this.api.User.select ==4){
    //   b1.style.display = 'inline-block';console.log(this.api.User.select)
    // } 
    //    else if (this.api.User.select ==5){
    //   b2.style.display = 'inline-block';console.log(this.api.User.select)
    // } 
    //    else if (this.api.User.select ==6){
    //   b3.style.display = 'inline-block';console.log(this.api.User.select)
    // } 
    // let a = setTimeout(() => {
    //   this.askhow();
    // }, 10000);
    // setTimeout(() => {
    //   this.askwell();
    // }, 20000);    
    // setTimeout(() => {
    //   this.askfood()
    // }, 25000);
  }
  askhow(){
  let div1 = document.getElementById('div1')
  div1.innerHTML = 'How are you today?';
  let btn = document.getElementById('btn');
  btn.style.display = 'inline-block';
  this.tts.speak({
    text: 'How are you today?',
    locale: 'en-US',
    rate: 1.6,
  })
}

  async askwell() {
    const alert = await this.alertCtrl.create({
      header: 'Deep breath for 10s'
    })
    await alert.present();
  }
  async askfood() {
    const alert = await this.alertCtrl.create({
      header: 'Remember to eat your lunch'
    })
    await alert.present();
  }

 askagain(){
   let a=setTimeout(()=>{
     let div1=document.getElementById('div1')
    div1.innerHTML = 'How are you today?';
    let btn=document.getElementById('btn');
      btn.style.display = 'inline-block';
      this.tts.speak({
        text: 'How are you today?',
        locale: 'en-US',
        rate: 1.6,
      })
   },10000)
 }
  
  ask() {
    this.tts.speak({
      text: 'How are you today?',
      locale: 'en-US',
      rate: 1.6,
    })
  }
  async showAlertsmile() {
    console.log('Morning morning')
    this.tts.speak({
      text: 'I am glad that you are doing good',
      locale: 'en-US',
      rate: 1.6,
    })
    const alert = await this.alertCtrl.create({

      header: 'I am glad that you are doing good',
      subHeader:'Tell me more about it',
      inputs: [{
        placeholder: 'Type here'
      }],
      buttons: [{
          text: 'Skip',
          handler: data => {
            console.log('Skipped')
          }
        },
        {
          text: 'Submit',
          handler: async data => {
            this.tts.speak({
              text: 'Thank you!',
              locale: 'en-US',
              rate: 1.6,})
            const toast = await this.toastCtrl.create({
              message: 'Thank you for your input',
              duration: 2000,
              // position: 'bottom' ,
            })
            console.log('Submitted');
            await toast.present();
            // document.getElementById('minfo').innerHTML = data.moodinfo;
            // console.log(data.moodinfo)}
          }
        }
      ]
    })
    alert.onDidDismiss().then(() => {
      this.api.User.dailymood.smile++;
      console.log(`smile = ${this.api.User.dailymood.smile}`)
      let div1 = document.getElementById('div1');
      div1.innerHTML = `Great!`;
      let btn=document.getElementById('btn');
      btn.style.display = 'none';
      this.askagain();
    })

    await alert.present();
  }

  async showAlertneutral() {
    this.tts.speak({
      text: 'I hope your day will get better',
      locale: 'en-US',
      rate: 1.6,
    })
    const alert = await this.alertCtrl.create({

      header: 'I hope your day will get better',
      subHeader:'Tell me more about it',
      inputs: [{
        placeholder: 'Type here'
      }],
      buttons: [{
          text: 'Skip',
          handler: data => {
            console.log('Skipped')
          }
        },
        {
          text: 'Submit',
          handler: async data => {
            this.tts.speak({
              text: 'Thank you!',
              locale: 'en-US',
              rate: 1.6,})
            const toast = await this.toastCtrl.create({
              message: 'Thank you for your input',
              duration: 2000,
              // position: 'bottom' ,
            })
            console.log('Submitted');
            await toast.present();
            // document.getElementById('minfo').innerHTML = data.moodinfo;
            // console.log(data.moodinfo)}
          }
        }
      ]
    })
    alert.onDidDismiss().then(() => {
      this.api.User.dailymood.neutral++
      console.log(`neutral = ${this.api.User.dailymood.neutral}`)
      let div1 = document.getElementById('div1');
      div1.innerHTML = `What's wrong? I am here to help`;
      let btn=document.getElementById('btn');
      btn.style.display = 'none';
      this.askagain();
    })

    await alert.present();
  }


  async showAlertmad() {
    this.tts.speak({
      text: 'What is wrong? I am here to help',
      locale: 'en-US',
      rate: 1.6,
    })
    const alert = await this.alertCtrl.create({

      header: 'What is wrong? I am here to help',
      subHeader:'Tell me more about it',
      inputs: [{
        placeholder: 'Type here'
      }],
      buttons: [{
          text: 'Skip',
          handler: data => {
            console.log('Skipped')
          }
        },
        {
          text: 'Submit',
          handler: async data => {
            this.tts.speak({
              text: 'Thank you!',
              locale: 'en-US',
              rate: 1.6,})
            const toast = await this.toastCtrl.create({
              message: 'Thank you for your input',
              duration: 2000,
              // position: 'bottom' ,
            })
            console.log('Submitted');
            await toast.present();
            // document.getElementById('minfo').innerHTML = data.moodinfo;
            // console.log(data.moodinfo)}
          }
        }
      ]
    })
    alert.onDidDismiss().then(() => {
      this.api.User.dailymood.mad++
      console.log(`mad = ${this.api.User.dailymood.mad}`)
      let div1 = document.getElementById('div1');
      div1.innerHTML = `Hope your day will get better`;
      let btn=document.getElementById('btn');
      btn.style.display = 'none';
      this.askagain();
    })

    await alert.present();
  }

  

  testMed() {
    this.api.test();
  }






}
  