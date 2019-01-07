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
import {
  ApiService
} from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private api: ApiService, 
    private tts: TextToSpeech, private alertCtrl: AlertController, private toastCtrl: ToastController) {}
created:boolean = false;
  ngOnInit() {
    let char=document.getElementById('char');
    if (this.created == false){
      let chec = document.createElement('img');
     if (this.api.User.select == 1) {
      chec.src = 'assets/girl1.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 2) {
      chec.src = 'assets/girl2.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 3) {
      chec.src = 'assets/girl3.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 4) {
      chec.src = 'assets/boy1.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 5) {
      chec.src = 'assets/boy2.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 6) {
      chec.src = 'assets/boy3.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.select == 1) {
      chec.src = 'assets/girl1g.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.select == 2) {
      chec.src = 'assets/girl2g.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.select == 3) {
      chec.src = 'assets/girl3g.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.select == 4) {
      chec.src = 'assets/boy1g.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.select == 5) {
      chec.src = 'assets/boy2g.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.select == 6) {
      chec.src = 'assets/boy3g.png'
      console.log(this.api.User.select)
    } else if (this.api.User.boot == true && this.api.User.select == 1) {
      chec.src = 'assets/girl1b.png'
      console.log(this.api.User.select)
    } else if (this.api.User.boot == true && this.api.User.select == 2) {
      chec.src = 'assets/girl2b.png'
      console.log(this.api.User.select)
    } else if (this.api.User.boot == true && this.api.User.select == 3) {
      chec.src = 'assets/girl3b.png'
      console.log(this.api.User.select)
    } else if (this.api.User.boot == true && this.api.User.select == 4) {
      chec.src = 'assets/boy1b.png'
      console.log(this.api.User.select)
    } else if (this.api.User.boot == true && this.api.User.select == 5) {
      chec.src = 'assets/boy2b.png'
      console.log(this.api.User.select)
    } else if (this.api.User.boot == true && this.api.User.select == 6) {
      chec.src = 'assets/boy3b.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.boot == true && this.api.User.select == 1) {
      chec.src = 'assets/girl1bg.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.boot == true && this.api.User.select == 2) {
      chec.src = 'assets/girl2bg.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.boot == true && this.api.User.select == 3) {
      chec.src = 'assets/girl3bg.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.boot == true && this.api.User.select == 4) {
      chec.src = 'assets/boy1bg.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.boot == true && this.api.User.select == 5) {
      chec.src = 'assets/boy2bg.png'
      console.log(this.api.User.select)
    } else if (this.api.User.glove == true && this.api.User.boot == true && this.api.User.select == 6) {
      chec.src = 'assets/boy3bg.png'
      console.log(this.api.User.select)
    } 
    
    
    else if (this.api.User.select == 11) {
      chec.src = 'assets/girl1b.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 22) {
      chec.src = 'assets/girl2b.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 33) {
      chec.src = 'assets/girl3b.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 44) {
      chec.src = 'assets/boy1b.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 55) {
      chec.src = 'assets/boy2b.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 66) {
      chec.src = 'assets/boy3b.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 111) {
      chec.src = 'assets/girl1g.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 222) {
      chec.src = 'assets/girl2g.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 333) {
      chec.src = 'assets/girl3g.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 444) {
      chec.src = 'assets/boy1g.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 555) {
      chec.src = 'assets/boy2g.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 666) {
      chec.src = 'assets/boy3g.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 1111) {
      chec.src = 'assets/girl1bg.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 2222) {
      chec.src = 'assets/girl2bg.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 3333) {
      chec.src = 'assets/girl3bg.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 4444) {
      chec.src = 'assets/boy1bg.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 5555) {
      chec.src = 'assets/boy2bg.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 6666) {
      chec.src = 'assets/boy3bg.png'
      console.log(this.api.User.select)
    }
    char.appendChild(chec)
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
    // if (this.dashselect == 1) {
    //   g1.style.display = 'inline-block';
    //   console.log(this.dashselect)
    // } else if (this.dashselect == 2) {
    //   g2.style.display = 'inline-block';
    //   console.log(this.dashselect)
    // } else if (this.dashselect == 3) {
    //   g3.style.display = 'inline-block';
    //   console.log(this.dashselect)
    // } else if (this.dashselect == 4) {
    //   b1.style.display = 'inline-block';
    //   console.log(this.dashselect)
    // } else if (this.dashselect == 5) {
    //   b2.style.display = 'inline-block';
    //   console.log(this.dashselect)
    // } else if (this.dashselect == 6) {
    //   b3.style.display = 'inline-block';
    //   console.log(this.dashselect)
    // }
    let a = setTimeout(() => {

      let div1 = document.getElementById('div1')
      div1.innerHTML = 'How are you today?';
      let btn = document.getElementById('btn');
      btn.style.display = 'inline-block';
      this.tts.speak({
        text: 'How are you today?',
        locale: 'en-US',
        rate: 1.6,
      })
    }, 3000);
  }

  askagain() {
    let a = setTimeout(() => {
      let div1 = document.getElementById('div1')
      div1.innerHTML = 'How are you today?';
      let btn = document.getElementById('btn');
      btn.style.display = 'inline-block';
      this.tts.speak({
        text: 'How are you today?',
        locale: 'en-US',
        rate: 1.6,
      })
    }, 10000)
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
      subHeader: 'Tell me more about it',
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
              rate: 1.6,
            })
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
      let btn = document.getElementById('btn');
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
      subHeader: 'Tell me more about it',
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
              rate: 1.6,
            })
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
      let btn = document.getElementById('btn');
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
      subHeader: 'Tell me more about it',
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
              rate: 1.6,
            })
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
      let btn = document.getElementById('btn');
      btn.style.display = 'none';
      this.askagain();
    })

    await alert.present();
  }
}