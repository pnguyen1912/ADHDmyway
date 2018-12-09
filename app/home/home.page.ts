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
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  smile: number = 0;
  neutral: number = 0;
  mad: number = 0;
  

  constructor(private tts: TextToSpeech, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    console.log('Morning morning')
    let a = setTimeout(() => {
      let div1=document.getElementById('div1')
    div1.innerHTML = 'How are you today?';
    let btn=document.getElementById('btn');
      btn.style.display = 'inline-block';
      this.tts.speak({
        text: 'How are you today?',
        locale: 'en-US',
        rate: 1.6,
      })
    }, 3000);
    
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
      this.smile++;
      console.log(`smile = ${this.smile}`)
      let div1 = document.getElementById('div1');
      div1.innerHTML = 'You are great!';
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
      this.neutral++
      console.log(`neutral = ${this.neutral}`)
      let div1 = document.getElementById('div1');
      div1.innerHTML = 'You are great!';
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
      this.mad++
      console.log(`mad = ${this.mad}`)
      let div1 = document.getElementById('div1');
      div1.innerHTML = 'You are great!';
      let btn=document.getElementById('btn');
      btn.style.display = 'none';
      this.askagain();
    })

    await alert.present();
  }
}