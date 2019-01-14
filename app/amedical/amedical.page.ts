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
 import {
  NavController
 } from '@ionic/angular';
 import {RestapiService } from '../restapi.service';
 
 
 @Component({
  selector: 'app-medical',
  templateUrl: './amedical.page.html',
  styleUrls: ['./amedical.page.scss'],
 })
 export class AmedicalPage {
 
  x: boolean;
  element: HTMLElement;
  change1: boolean = false;
  change2: boolean = false;
  change3: boolean = false;
  change4: boolean = false;
  chose: number = 0;
 
  
 
 
  myElements: ['geometry', 'algebra', 'calculus', 'science', 'history', 'social studies',
  'economics', 'trigonometry', 'pre-calculus', 'statistics', 'biology'
  ]
 
  firstname: any;
  lastname: any;
  nickname: any;
  items: any;
  items1: any;
  items2: any;
  items3: any;
  items4: any;
  items5: any;
  items6: any;
  items7: any;
  options: any;
  genders: any;
  birthDate: any;
  zipcode: any;
  // inputValue: string = '';
  // singleValue: string = '';
  // singleValue1: string = '';
  // singleValue2: string = '';
  // singleValue3: string = '';
  // singleValue4: string = '';
  // singleValue5: string = '';
  // singleValue6: string = '';
  // singleValue7: string = '';
  // singleValue8: string = '';
  // singleValue9: string = '';
  // singleValue10: string = '';
  // singleValue11: string = '';
  // singleValue12: string = '';
  // singleValue13: string = '';
  // singleValue14: string = '';
  // singleValue15: string = '';
 
  // checkedItems: any;
  // checkedItems1: any;
  // checkedItems2: any;
  // checkedItems3: any;
  // checkedItems4: any;
  // checkedItems5: any;
  // checkedItems6: any;
  // checkedItems7: any;
  // checkedOptions: any;
  // checkedGender: any;
 
 
 
 
 
 
  constructor(private router: Router, private alertCtrl: AlertController,
  public navCtrl: NavController, public api: RestapiService) {
  this.items = [{
  name: 'Forgets what he/she is saying or doing in the middle of a task',
  isChecked: false
  },
  {
  name: 'Seems to have difficulty controlling impulses (will say or do things without thinking about them first',
  isChecked: false
  },
  {
  name: 'Lack of proper social skills with peers and adults',
  isChecked: false
  },
  {
  name: 'Addictive behaviors (drugs, alcohol)',
  isChecked: false
  },
  ];
 
  this.items1 = [{
  name: 'Is easily frustrated',
  isChecked: false
  },
  {
  name: 'Physical aggression',
  isChecked: false
  },
  {
  name: 'Has uncontrollable mood swings',
  isChecked: false
  },
  {
  name: 'Improper reaction to situations',
  isChecked: false
  },
  {
  name: 'Easily brought to tears',
  isChecked: false
  },
  ];
 
  this.items2 = [{
  name: 'Requires many reminders to stay on task',
  isChecked: false
  },
  {
  name: ' Seems to struggle with making decisions',
  isChecked: false
  },
  {
  name: 'Struggles to comprehend how much time a project will take to complete',
  isChecked: false
  },
  {
  name: 'Finds it difficult to set goals',
  isChecked: false
  },
  {
  name: 'Has difficulty understanding what is important in terms of when things need to be completed',
  isChecked: false
  },
  ];
 
  this.items3 = [{
  name: 'Gets frustrated with changes in schedule or usual routines',
  isChecked: false
  },
  {
  name: 'Has difficulty shifting from one activity to another',
  isChecked: false
  },
  {
  name: 'Struggles with shifting between information that is literal vs. figurative, past vs. present etc',
  isChecked: false
  },
  {
  name: 'Struggles to understand there is more than one way to solve a problem',
  isChecked: false
  },
  {
  name: 'Gets stuck on parts of tasks and can’t move forward',
  isChecked: false
  },
  ];
 
  this.items4 = [{
  name: 'Takes longer than peers to complete homework and other tasks',
  isChecked: false
  },
  {
  name: 'Has difficulty remembering and following instructions',
  isChecked: false
  },
  {
  name: 'Has challenges with either articulating or writing a main idea',
  isChecked: false
  },
  {
  name: 'Has difficulty paraphrasing or summarizing',
  isChecked: false
  },
  {
  name: 'Loses many items',
  isChecked: false
  },
  ];
 
  this.items5 = [{
  name: 'Finds checking his/her work very difficult (and may not do at all)',
  isChecked: false
  },
  {
  name: 'Struggles with monitoring task completion (?)',
  isChecked: false
  },
  ];
 
  this.options = [{
  name: 'Laid-back: No sense of time',
  isChecked: false
  },
  {
  name: 'Anxious: Fear of incompletion',
  isChecked: false
  },
  {
  name: 'Failure: I cant do it anyway',
  isChecked: false
  },
  {
  name: 'Adrenaline Rush: Best under pressure',
  isChecked: false
  },
 
  ];
 
  this.items6 = [{
  name: 'Loses track of time or assignment due dates',
  isChecked: false
  },
  {
  name: 'Struggles with keeping track of needed materials;',
  isChecked: false
  },
  {
  name: 'Room, desk and locker are a disaster',
  isChecked: false
  },
  {
  name: 'Unable to properly maintain an assignment notebook or calendar',
  isChecked: false
  },
  ];
 
  this.items7 = [{
  name: 'Struggles with the ability to analyze why you got something right or wrong',
  isChecked: false
  },
  {
  name: 'Knowing yourself (understand why you do certain behaviors)',
  isChecked: false
  },
  {
  name: 'Knowing how to ask the right questions',
  isChecked: false
  },
  {
  name: 'Knowing what emotion is really behind why you do certain thing',
  isChecked: false
  },
  ];
 
  this.genders = [{
  name: 'Female',
  },
  {
  name: 'Male'
  },
  ];
  }
 
 
 
 
 
 
 
 
 
  // functions start
 
 
  getCheckedvalue() {
  this.api.medical.checkedItems = this.items.filter(value => {
  return value.isChecked;
  });
  this.api.medical.checkedItems1 = this.items1.filter(value => { 
  return value.isChecked;
  })
  this.api.medical.checkedItems2 = this.items2.filter(value => {
  return value.isChecked;
  })
  this.api.medical.checkedItems3 = this.items3.filter(value => {
  return value.isChecked;
  })
  this.api.medical.checkedItems4 = this.items4.filter(value => {
  return value.isChecked;
  })
  this.api.medical.checkedItems5 = this.items5.filter(value => {
  return value.isChecked;
  })
  this.api.medical.checkedOptions = this.options.filter(value => {
  return value.isChecked;
  });
  this.api.medical.checkedItems6 = this.items6.filter(value => {
  return value.isChecked;
  })
  this.api.medical.checkedItems7 = this.items7.filter(value => {
  return value.isChecked;
  })
 
  console.log(this.api.medical.checkedItems);
  console.log(this.api.medical.checkedItems1);
  console.log(this.api.medical.checkedItems2);
  console.log(this.api.medical.checkedItems3);
  console.log(this.api.medical.checkedItems4);
  console.log(this.api.medical.checkedItems5);
  console.log(this.api.medical.checkedOptions)
  console.log(this.api.medical.checkedItems6);
  console.log(this.api.medical.checkedItems7);
  console.log(this.firstname);
  console.log(this.lastname);
  console.log(this.nickname);
 this.api.User.firstname = this.firstname
 this.api.User.lastname = this.lastname
 this.api.User.nickname = this.nickname
 
 console.log(this.api.User)
 
  this.presentAlert();
 
  // this.router.navigate(['/home'])
 
  
  }
 
  onChange(SelectedValue) {
  console.log("Selected", SelectedValue)
 
  }
 
  changeDate(_event) {
  console.log('Date : ' + JSON.stringify(new Date(this.birthDate).toDateString()));
  }
 
  zipFunc() {
  console.log(this.api.inputValue)
  }
 
  weightFunc() {
  console.log(this.api.inputValue1)
  }
 
  heightFunc() {
  console.log(this.api.inputValue2)
  console.log(this.api.inputValue3)
  }
 
  updateFunc() {
  console.log('appetite: ' + this.api.singleValue)
  }
 
  updateFunc1() {
  console.log('percentage of processes foods: ' + this.api.singleValue1)
  }
 
  updateFunc2() {
  console.log('Sugar intake: ' + this.api.singleValue2)
  }
 
  updateFunc3() {
  console.log('Average hours of sleep: ' + this.api.singleValue3)
  }
 
  updateFunc4() {
  console.log('How often person washes per week: ' + this.api.singleValue4)
  }
 
  updateFunc5() {
  console.log('SCHOOL stress levels: ' + this.api.singleValue5)
  }
 
  updateFunc6() {
  console.log('HOME stress levels: ' + this.api.singleValue6)
  }
 
  updateFunc7() {
  console.log('FRIENDS stress levels: ' + this.api.singleValue7)
  }
 
  updateFunc8() {
  console.log('SPORTS stress levels: ' + this.api.singleValue8)
  }
 
  updateFunc9() {
  console.log('WORK stress levels: ' + this.api.singleValue9)
  }
 
  updateFunc10() {
  console.log('OTHER stress levels: ' + this.api.singleValue10)
  }
 
  updateFunc11() {
  console.log('Physical Education: ' + this.api.singleValue11)
  }
 
  updateFunc12() {
  console.log('Workout: ' + this.api.singleValue12)
  }
 
  updateFunc13() {
  console.log('Sports: ' + this.api.singleValue13)
  }
 
  updateFunc14() {
  console.log('Freetime: ' + this.api.singleValue14)
  }
 
  updateFunc15() {
  console.log('Other: ' + this.api.singleValue15)
  }
 
  async presentAlert() {
  
  const alert = await this.alertCtrl.create({
  header: 'Almost Done',
  subHeader: 'Just a few more questions',
  buttons: [
  {
  text: 'Cancel',
  handler: data => {
  console.log('canceled')
  }
  },
  {
  text: 'Confirm',
  handler: () =>{
  console.log('Confirm Okay')
  
  let toggleDiv = document.getElementById('toggleDiv');
  let div1 = document.getElementById('root');
  if (toggleDiv.style.display == 'none') {
  toggleDiv.style.display = 'block'
  div1.style.display= 'none'
  }
  }
  }
  ]
  })
  alert.onDidDismiss().then( () => {
  
  console.log('stuff is dismissed');
  })
  
  await alert.present();
  }
 
  user () {
  this.router.navigate(['/user'])
  }
  
  async finish() {
  
  const alert = await this.alertCtrl.create({
  header: 'Medication questions',
  subHeader: "We're going to ask you about medication now",
  buttons: [
  {
  text: 'Cancel',
  handler: data => {
  console.log('canceled')
  }
  },
  {
  text: 'Confirm',
  handler: () =>{
  console.log('Confirm Okay')
  
  let toggleDiv = document.getElementById('toggleDiv');
  let med = document.getElementById('med');
  let root = document.getElementById('root');
  if (toggleDiv.style.display == 'block') {
  toggleDiv.style.display = 'none'
  med.style.display= 'block'
  root.style.display = 'none'
  }
  }
  }
  ]
  })
  alert.onDidDismiss().then( () => {
  
  console.log('stuff is dismissed');
  })
  
  await alert.present();
  }
 
 
 
 
 
  // yes() {
  // let have = document.getElementById('have');
  // let whatKind = document.getElementById('whatKind');
  // let stim = document.getElementById('stim');
  // let nonstim = document.getElementById('nonstim');
  // let anti = document.getElementById('anti');
  // let anxiety = document.getElementById('anxiety');
  // let back = document.getElementById('back');
  // have.style.display = "none";
  // whatKind.style.display = "block";
  // stim.style.display = "none";
  // nonstim.style.display = "none";
  // anti.style.display = "none";
  // anxiety.style.display = "none";
  // back.style.display = "none";
  // }
 
 
 
  next() {
 
  let have = document.getElementById('have');
  let whatKind = document.getElementById('whatKind');
  let stim = document.getElementById('stim');
  let nonstim = document.getElementById('nonstim');
  let anti = document.getElementById('anti');
  let anxiety = document.getElementById('anxiety');
  let back = document.getElementById('back');
  let next1 = document.getElementById('next1');
  whatKind.style.display = 'none';
  if (this.change1 == true) {
  stim.style.display = 'block'
  };
  if (this.change2 == true) {
  nonstim.style.display = 'block'
  };
  if (this.change3 == true) {
  anti.style.display = 'block'
  };
  if (this.change4 == true) {
  anxiety.style.display = 'block'
  };
  back.style.display = "block";
  next1.style.display = "block";
 
 
  }
 
 
 
  change11() {
  
  }
  
  change12() {
  this.change2 = true;
  // this.chose++;
 
  }
  change13() {
  this.change3 = true;
  // this.chose++;
 
  }
  change14() {
  this.change4 = true;
  // this.chose++;
 
  }
 
  back() {
  let have = document.getElementById('have');
  let whatKind = document.getElementById('whatKind');
  let stim = document.getElementById('stim');
  let nonstim = document.getElementById('nonstim');
  let anti = document.getElementById('anti');
  let anxiety = document.getElementById('anxiety');
  have.style.display = "block";
  whatKind.style.display = "none";
  stim.style.display = "none";
  nonstim.style.display = "none";
  anti.style.display = "none";
  anxiety.style.display = "none";
  }
  mainHome() {
  this.router.navigate(['/acharacter']);
  }
  next1() {
  this.router.navigate(['/acharacter']);
  }
 
 
 
 
 
 
 
 
 
 }
 