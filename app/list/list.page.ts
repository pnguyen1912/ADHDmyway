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
import {Camera,CameraOptions} from '@ionic-native/camera/ngx';
import { timer } from 'rxjs';

declare var window;
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private base64Image: string; //Image data
  constructor(private camera1: Camera,public alertCtrl: AlertController, public api: ApiService, public router:Router,
    ) {}
    a : any;
    time = 0;
  timer(counttime){
    this.a = setInterval(()=>{
      console.log(this.time)
      this.time = this.time + 1;
      counttime.innerText = this.time;
    },1000)
  }

  stoptime(){
    clearInterval(this.a)
  }

  public i = 0;
  public ii = 0;
  public iii = 0;

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

            newa.id = `${this.id1}`; //num="0"
            // console.log(newa.id)
            // this.myElements.push(newa.id)
            // console.log(this.myElements)
            // num++;

            newa.innerText = this.api.User.task.todo[this.i];
            todo.appendChild(newa);
            console.log(this.api.User);
            console.log(newa.id)
            this.i++;
            newa.setAttribute('style', 'color:red')

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
      subHeader: `Are you working on ${document.getElementById(clicked_id).innerHTML}`,

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
            this.api.User.task.doing[this.ii]= newa.innerText;
            for (let run = 0; run < this.api.User.task.todo.length;run++){
              if (this.api.User.task.todo[run] === this.api.User.task.doing[run]){
                delete this.api.User.task.todo[run]
              }
            }   
            console.log(newa.id)
            console.log(this.api.User)
            doing.append(newa);
            let newtimer = document.createElement('ion-card')

            this.timer(newtimer);
            doing.append(newtimer)
            this.ii++;
            newa.onclick = (async) => this.classFunction2(newa.id);
            this.camera();
            
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
            
            // this.api.User.task.doing[this.ii]= newa.innerHTML;
            // delete this.api.User.task.todo[Number(newa.id)-1]
            // console.log(newa.id)
            // console.log(this.api.User.task.todo);
            // console.log(this.api.User.task.doing);
            // console.log(this.api.User.task.done);
            // doing.append(newa);
            // this.ii++;
            // newa.onclick = (async) => this.classFunction2(newa.id);

            // this.myElements.push(newa.id)
            this.stoptime();
            done.append(newa);
            this.api.User.task.done[this.iii]= newa.innerHTML;
            for (let run = 0; run < this.api.User.task.doing.length;run++){
              if (this.api.User.task.doing[run] === this.api.User.task.done[run]){
                delete this.api.User.task.doing[run]
              }
            }

            console.log(this.api.User);
            this.camera();
            this.iii++;
            this.router.navigate(['/balloon'])
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






  public i1 = 0;
  public ii1 = 0;
  public iii1 = 0;

  classTask() {
    this.presentAlert4();
  }
  async presentAlert4() {
    let todo = document.getElementById('todo1');
    const alert = await this.alertCtrl.create({
      header: 'Add Task',
      subHeader: 'Which Task are you working on?',
      inputs: [{
        id: `input${this.i1}`,
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


            let input1 = < HTMLInputElement > document.getElementById(`input${this.i1}`);
            this.api.User.task1.todo[this.i1] = input1.value;
            let newa = document.createElement('ion-card');
            // newa.setAttribute("(click)","movetodoing()");
            // newa.setAttribute("id",`card${this.i}`);
            this.id1++;

            newa.id = `${this.id1}`; //num="0"
            // console.log(newa.id)
            // this.myElements.push(newa.id)
            // console.log(this.myElements)
            // num++;

            newa.innerText = this.api.User.task1.todo[this.i1];
            todo.appendChild(newa);
            console.log(this.api.User);
            console.log(newa.id)
            this.i1++;

            newa.onclick = (async) => this.classTask1(newa.id);
          }
        }
      ]
    })
    alert.onDidDismiss().then(() => {
      console.log('stuff is dismissed');
    })

    await alert.present();
  }

  classTask1(clicked_id) {
    this.presentAlert5(clicked_id);
  }
  async presentAlert5(clicked_id) {
    let newa = document.getElementById(clicked_id);
    let doing = document.getElementById('doing1');
    const alert = await this.alertCtrl.create({
      header: 'Move todo -> doing',
      subHeader: `Are you working on ${document.getElementById(clicked_id).innerHTML}`,

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
            
            this.api.User.task1.doing[this.ii1]= newa.innerHTML;
            for (let run = 0; run < this.api.User.task1.todo.length;run++){
              if (this.api.User.task1.todo[run] === this.api.User.task1.doing[run]){
                delete this.api.User.task1.todo[run]
              }
            }            
            console.log(newa.id)
            console.log(this.api.User)
            doing.append(newa);
            this.ii1++;
            this.camera();
            newa.onclick = (async) => this.classTask2(newa.id);
          }
        }
      ]
    })

    await alert.present();
  }
  classTask2(clicked_id) {
    this.presentAlert6(clicked_id);
  }
  async presentAlert6(clicked_id) {
    let newa = document.getElementById(clicked_id);
    let done = document.getElementById('done1');

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

            // this.api.User.task.doing[this.ii]= newa.innerHTML;
            // delete this.api.User.task.todo[Number(newa.id)-1]
            // console.log(newa.id)
            // console.log(this.api.User.task.todo);
            // console.log(this.api.User.task.doing);
            // console.log(this.api.User.task.done);
            // doing.append(newa);
            // this.ii++;
            // newa.onclick = (async) => this.classTask2(newa.id);

            // this.myElements.push(newa.id)
            done.append(newa);
            this.api.User.task1.done[this.iii1]= newa.innerHTML;
            for (let run = 0; run < this.api.User.task1.doing.length;run++){
              if (this.api.User.task1.doing[run] === this.api.User.task1.done[run]){
                delete this.api.User.task1.doing[run]
              }
            }
            console.log(this.api.User)
            this.iii1++;
            newa.onclick = (async) => this.classTask3();
            this.camera();
          }
        }
      ]
    })

    await alert.present();
  }
  classTask3() {
    console.log('Already done')
  }






  public i2 = 0;
  public ii2 = 0;
  public iii2 = 0;

  classAct() {
    this.presentAlert7();
  }
  async presentAlert7() {
    let todo = document.getElementById('todo2');
    const alert = await this.alertCtrl.create({
      header: 'Add Activity',
      subHeader: 'Which activity are you working on?',
      inputs: [{
        id: `input${this.i2}`,
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


            let input1 = < HTMLInputElement > document.getElementById(`input${this.i2}`);
            this.api.User.task2.todo[this.i2] = input1.value;
            let newa = document.createElement('ion-card');
            // newa.setAttribute("(click)","movetodoing()");
            // newa.setAttribute("id",`card${this.i}`);
            this.id1++;

            newa.id = `${this.id1}`; //num="0"
            // console.log(newa.id)
            // this.myElements.push(newa.id)
            // console.log(this.myElements)
            // num++;

            newa.innerText = this.api.User.task2.todo[this.i2];
            todo.appendChild(newa);
            console.log(this.api.User);
            console.log(newa.id)
            this.i2++;

            newa.onclick = (async) => this.classAct1(newa.id);
          }
        }
      ]
    })
    alert.onDidDismiss().then(() => {
      console.log('stuff is dismissed');
    })

    await alert.present();
  }

  classAct1(clicked_id) {
    this.presentAlert8(clicked_id);
  }
  async presentAlert8(clicked_id) {
    let newa = document.getElementById(clicked_id);
    let doing = document.getElementById('doing2');
    const alert = await this.alertCtrl.create({
      header: 'Move todo -> doing',
      subHeader: `Are you working on ${document.getElementById(clicked_id).innerHTML}`,

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
            
            this.api.User.task2.doing[this.ii2]= newa.innerHTML;
            for (let run = 0; run < this.api.User.task2.todo.length;run++){
              if (this.api.User.task2.todo[run] === this.api.User.task2.doing[run]){
                delete this.api.User.task2.todo[run]
              }
            }
            console.log(newa.id)
            console.log(this.api.User)
            doing.append(newa);
            this.ii2++;
            this.camera();
            newa.onclick = (async) => this.classAct2(newa.id);
          }
        }
      ]
    })

    await alert.present();
  }
  classAct2(clicked_id) {
    this.presentAlert9(clicked_id);
  }
  async presentAlert9(clicked_id) {
    let newa = document.getElementById(clicked_id);
    let done = document.getElementById('done2');

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

            // this.api.User.task.doing[this.ii]= newa.innerHTML;
            // delete this.api.User.task.todo[Number(newa.id)-1]
            // console.log(newa.id)
            // console.log(this.api.User.task.todo);
            // console.log(this.api.User.task.doing);
            // console.log(this.api.User.task.done);
            // doing.append(newa);
            // this.ii++;
            // newa.onclick = (async) => this.classTask2(newa.id);

            // this.myElements.push(newa.id)
            done.append(newa);
            this.api.User.task2.done[this.iii2]= newa.innerHTML;
            for (let run = 0; run < this.api.User.task2.doing.length;run++){
              if (this.api.User.task2.doing[run] === this.api.User.task2.done[run]){
                delete this.api.User.task2.doing[run]
              }
            }
            console.log(this.api.User)
            this.iii2++;
            this.camera();
            
            newa.onclick = (async) => this.classAct3();
          }
        }
      ]
    })

    await alert.present();
  }
  classAct3() {
    console.log('Already done')
  }












  homework() {
    document.getElementById('root').style.display = 'none';
    document.getElementById('justhw').style.display = 'block';
  }
  task() {
    document.getElementById('root').style.display = 'none';
    document.getElementById('justtask').style.display = 'block';
  }
  act() {
    document.getElementById('root').style.display = 'none';
    document.getElementById('justact').style.display = 'block';
  }
  back() {
    document.getElementById('root').style.display = 'block';
    document.getElementById('justhw').style.display = 'none';
    document.getElementById('justtask').style.display = 'none';
    document.getElementById('justact').style.display = 'none';

  }




camera(){
  const option:CameraOptions = {
    quality: 100,
    destinationType: this.camera1.DestinationType.FILE_URI,
    encodingType: this.camera1.EncodingType.JPEG,
    mediaType: this.camera1.MediaType.PICTURE,
  }
  this.camera1.getPicture(option).then((imageData) => {
    this.base64Image = window.Ionic.WebView.convertFileSrc(imageData);
    
  },(err) => {console.log(err)} )

}

  ngOnInit() {}
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}