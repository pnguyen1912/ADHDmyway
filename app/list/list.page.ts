import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  AlertController
} from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public router: Router;
  private icons = [];
  public items: Array < {
    title: string;note: string;icon: string
  } > = [];
  constructor(public alertCtrl: AlertController) {}

  myElements: any = [];

  newa = document.createElement('ion-card');
  async presentAlert() {
    let todo = document.getElementById('todo');


    const alert = await this.alertCtrl.create({
      header: 'Add Homework',
      subHeader: 'Which homework are you working on?',
      inputs: [{
        id: 'input1',
        type: 'text',
        placeholder: "Type Here",
      }],
      buttons: [{
          text: 'Cancel',
          handler: data => {
            console.log('canceled')
          }
        },
        {

          text: 'Add',
          handler: data => {

            let num = 0;
            let input1 = < HTMLInputElement > document.getElementById('input1');
            let work = input1.value;
            console.log(work);
            this.newa.id = 'card' + num.toString(); //num="0"
            console.log(this.newa.id)
            console.log(typeof this.newa.id)
            this.myElements.push(this.newa.id)
            console.log(this.myElements)
            num++;

            this.newa.innerText = work;
            todo.appendChild(this.newa);

            this.newa.onclick = (async) => this.classFunction1();
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
    const alert = await this.alertCtrl.create({
      header: 'Move todo -> doing',
      subHeader: 'Which homework are you working on?',

      buttons: [{
          text: 'Cancel',
          handler: data => {
            console.log('canceled')
          }
        },
        {

          text: 'Yes',
          handler: data => {

            // this.myElements.push(newa.id)
            console.log(this.myElements)

            document.getElementById('doing').appendChild(document.getElementById('card0'))
            this.newa.onclick = (async) => this.classFunction2();
          }
        }
      ]
    })

    await alert.present();
  }
  async presentAlert2() {
    let input1 = document.createElement('this.input1');
    const alert = await this.alertCtrl.create({
      header: 'Are you done?',
      subHeader: 'Which homework are you working on?',

      buttons: [{
          text: 'Cancel',
          handler: data => {
            console.log('canceled')
          }
        },
        {

          text: 'Yes',
          handler: data => {

            // this.myElements.push(newa.id)
            console.log(this.myElements)

            document.getElementById('done').appendChild(document.getElementById('card0'))
            input1.onclick = (async) => this.classFunction2();
          }
        }
      ]
    })

    await alert.present();
  }
  classFunction1() {
    this.presentAlert1();
  }
  classFunction2() {
    this.presentAlert2();
  }
  classFunction() {
    console.log('test');
    this.presentAlert();

  }

  ngOnInit() {}
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}