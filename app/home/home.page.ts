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
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  

  constructor(private api:ApiService,private tts: TextToSpeech, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    
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

  ngOnInit(){
    
    let g2 = document.getElementById('g2')
      let g3 = document.getElementById('g3')
      let b1 = document.getElementById('b1')
      let b2 = document.getElementById('b2')
      let b3 = document.getElementById('b3')
      let g1 = document.getElementById('g1')
      if (this.api.User.select == 1){
        g1.style.display = 'block';
        console.log(this.api.User.select)
      } else if (this.api.User.select ==2){
        g2.style.display = 'inline-block';console.log(this.api.User.select)
      } 
         else if (this.api.User.select ==3){
        g3.style.display = 'inline-block';console.log(this.api.User.select)
      } 
         else if (this.api.User.select ==4){
        b1.style.display = 'inline-block';console.log(this.api.User.select)
      } 
         else if (this.api.User.select ==5){
        b2.style.display = 'inline-block';console.log(this.api.User.select)
      } 
         else if (this.api.User.select ==6){
        b3.style.display = 'inline-block';console.log(this.api.User.select)
      } 
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
      this.api.User.dailymood.neutral++
      console.log(`neutral = ${this.api.User.dailymood.neutral}`)
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
      this.api.User.dailymood.mad++
      console.log(`mad = ${this.api.User.dailymood.mad}`)
      let div1 = document.getElementById('div1');
      div1.innerHTML = 'You are great!';
      let btn=document.getElementById('btn');
      btn.style.display = 'none';
      this.askagain();
    })

    await alert.present();
  }
}