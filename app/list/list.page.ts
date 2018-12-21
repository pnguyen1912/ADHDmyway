import {
  Component,
  OnInit,
  ɵConsole
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  AlertController
} from '@ionic/angular';
import {
  ApiService
} from '../api.service';
import {
  rootRenderNodes
} from '@angular/core/src/view';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public router: Router;

  constructor(public alertCtrl: AlertController, public api: ApiService) {}

  public cardss: any = [];
  public i = 0;
  public id1 = 0;
  classFunction() {
    console.log('test');
    this.presentAlert();
  }
  async presentAlert() {
    let todo = document.getElementById('todo');
    const alert = await this.alertCtrl.create({
      header: 'Add Homework',
      subHeader: 'Which homework are you working on?',
      inputs: [{
        id: `input${this.i}`,
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


            let input1 = < HTMLInputElement > document.getElementById(`input${this.i}`);
            this.api.User.task.todo[this.i] = input1.value;
            let newa = document.createElement('ion-card');
            // newa.setAttribute("(click)","movetodoing()");
            // newa.setAttribute("id",`card${this.i}`);
            this.id1++;

            newa.id = `card${this.id1}`; //num="0"
            // console.log(newa.id)
            // this.myElements.push(newa.id)
            // console.log(this.myElements)
            // num++;

            newa.innerText = this.api.User.task.todo[this.i];
            todo.appendChild(newa);
            console.log(this.api.User.task.todo);
            console.log(newa.id)
            this.i++;

            newa.onclick = (async) => this.classFunction1(newa.id);
          }
        }
      ]
    })
    alert.onDidDismiss().then(() => {
      console.log('stuff is dismissed');
    })

    await alert.present();
  }

  classFunction1(clicked_id) {
    this.presentAlert1(clicked_id);
  }
  async presentAlert1(clicked_id) {
    let newa = document.getElementById(clicked_id);
    let doing = document.getElementById('doing');
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


            doing.append(newa);
            newa.onclick = (async) => this.classFunction2(newa.id);
          }
        }
      ]
    })

    await alert.present();
  }
  classFunction2(clicked_id) {
    this.presentAlert2(clicked_id);
  }
  async presentAlert2(clicked_id) {
    let newa = document.getElementById(clicked_id);
    let done = document.getElementById('done');

    const alert = await this.alertCtrl.create({
      header: 'Are you done?',
      subHeader: 'DONE????',

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
            done.append(newa);
            newa.onclick = (async) => this.classFunction3();
          }
        }
      ]
    })

    await alert.present();
  }
  classFunction3() {
    console.log('Already done')
  }


  homework() {
    document.getElementById('root').style.display = 'none';
    document.getElementById('justhw').style.display = 'block';
  }
  back() {
    document.getElementById('root').style.display = 'block';
    document.getElementById('justhw').style.display = 'none';
  }









  ngOnInit() {}
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}