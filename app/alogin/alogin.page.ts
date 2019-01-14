import { Component, OnInit } from '@angular/core';
import {
 Router
} from '@angular/router'
import {
 CognitoService
} from '../cognito.service';
import {
 AlertController
} from '@ionic/angular';
import {ToastController} from '@ionic/angular';
import { RestapiService } from '../restapi.service';

@Component({
 selector: 'app-alogin',
 templateUrl: './alogin.page.html',
 styleUrls: ['./alogin.page.scss'],
})
export class AloginPage implements OnInit {

 element: HTMLElement;
 email: string;
 password: string;

 
 constructor(public api:RestapiService,
 private router: Router, public cognitoService: CognitoService, public alertCtrl: AlertController,public toastCtrl: ToastController) {
 if (this.cognitoService.getAuthenticatedUser() != null) {
this.api.getData();
setTimeout(() => {
 this.router.navigate(['/home'])
 
}, 1000);
 console.log(this.cognitoService.getAuthenticatedUser())
 this.cognitoService.getAuthenticatedUser().getSession(function(err, session) {
 if (err) {
 alert(err);
 return;
 }
 console.log('session validity: ' + session.isValid());
 
 },);
 }
 };

 DOB: any;
 gender: any;
 SelectedValue: any;

 ngOnInit() {
 }
 signUp () {
 let main1 = document.getElementById('main1');
 let main = document.getElementById('main');
 main1.style.display ='none';
 main.style.display = 'block';
 }
 
 showHide1(){
 let login = document.getElementById('login');
 let main = document.getElementById('main1');
 if (login.style.display =='none'){
 login.style.display = "block";
 main.style.display = "none";}
 }
 
 goBack1(){
 let login = document.getElementById('login');
 let main = document.getElementById('main1');
 if (login.style.display =='block'){
 login.style.display = "none";
 main.style.display = "block";}
 }
 
 
 login() {
 this.cognitoService.authenticate(this.email, this.password).then((res) => {
 console.log("User logged in");
 console.log(res);
 console.log(res['idToken']['jwtToken']);
 this.api.getData();
 setTimeout(() => {
 this.router.navigate(['/home'])
 
 }, 1000);
 
 this.presentToast();
 }, (err) => {
 console.log("user not logged in!");
 console.log(err);
 })
 }
 
 async presentToast() {
 const toast = await this.toastCtrl.create({
 message: 'You were Signed In',
 duration: 2000
 });
 toast.present();
 }
 showHide() {
 let main = document.getElementById('main');
 let questions1 = document.getElementById('questions1');
 let questions2 = document.getElementById('questions2');
 let questions3 = document.getElementById('questions3');
 if (main.style.display =='block'){
 main.style.display = "none";
 questions1.style.display = "block";
 questions2.style.display = "none";
 questions3.style.display = "none";}
 }
 goBack() {
 let main = document.getElementById('main');
 let questions1 = document.getElementById('questions1');
 let questions2 = document.getElementById('questions2');
 let questions3 = document.getElementById('questions3');
 main.style.display = "block";
 questions1.style.display = "none";
 questions2.style.display = "none";
 questions3.style.display = "none";
 }
 enter() {
 let main = document.getElementById('main');
 let questions1 = document.getElementById('questions1');
 let questions2 = document.getElementById('questions2');
 let questions3 = document.getElementById('questions3');
 main.style.display = "none";
 questions1.style.display = "none";
 questions2.style.display = "block";
 questions3.style.display = "none";
 }
 goBack2() {
 let main = document.getElementById('main');
 let questions1 = document.getElementById('questions1');
 let questions2 = document.getElementById('questions2');
 let questions3 = document.getElementById('questions3');
 main.style.display = "none";
 questions1.style.display = "block";
 questions2.style.display = "none";
 questions3.style.display = "none";

 }
 enter2() {
 let main = document.getElementById('main');
 let questions1 = document.getElementById('questions1');
 let questions2 = document.getElementById('questions2');
 let questions3 = document.getElementById('questions3');
 main.style.display = "none";
 questions1.style.display = "none";
 questions2.style.display = "none";
 questions3.style.display = "block";
 }
 goBack3() {
 let main = document.getElementById('main');
 let questions1 = document.getElementById('questions1');
 let questions2 = document.getElementById('questions2');
 let questions3 = document.getElementById('questions3');
 main.style.display = "none";
 questions1.style.display = "none";
 questions2.style.display = "block";
 questions3.style.display = "none";
 }



 enter3() {
 this.router.navigate(['/medical']);
 }
 goHome() {
 let main1 = document.getElementById('main1');
 let main = document.getElementById('main');
 main1.style.display ='block';
 main.style.display = 'none';
 }

 register() {

 console.log(this.DOB);
 console.log(this.gender);
 this.api.User.gender = this.gender
 this.api.User.DOB = this.DOB
 
 
 console.log(this.api.User)


 this.cognitoService.signUp(this.email, this.password).then(
 res => {
 this.promptVerificationCode();
 },
 err => {

 console.log(err);
 }
 );
 }

 async promptVerificationCode() {
 let alert = await this.alertCtrl.create({
 message: "Enter Verfication Code",
 inputs: [{
 name: "VerificationCode",
 placeholder: "Verification Code"
 }],
 buttons: [{
 text: "Cancel",
 role: "cancel",
 handler: data => {
 console.log("Cancel clicked");
 }
 },
 {
 text: "Verify",
 handler: data => {
 this.verifyUser(data.VerificationCode);
 }
 }

 ]
 });
 await alert.present();
 }

 verifyUser(VerificationCode) {
 this.cognitoService.confirmUser(VerificationCode, this.email).then(
 res => {
 console.log(res); 
 this.successAlert();
 },
 err => {
 alert(err.message);
 }
 );
 }

 async successAlert(){
 const alert = await this.alertCtrl.create({
 header: "Success",
 message: "You are now registered!",
 buttons: ["Sweet!"]
 });
 alert.onDidDismiss().then( () => {
 this.router.navigate(['/amedical']);
 });
 await alert.present();
 }

 onChange(SelectedValue) {
 console.log("Selected", SelectedValue)

 }
















































// showHide1() {
// let main = document.getElementById('main');
// let questions11 = document.getElementById('questions11');
// let questions12 = document.getElementById('questions12');
// let questions13 = document.getElementById('questions13');
// main.style.display = "none";
// questions11.style.display = "block";
// questions12.style.display = "none";
// questions13.style.display = "none";
// }
// g1oBack() {
// let main = document.getElementById('main');
// let questions11 = document.getElementById('questions11');
// let questions12 = document.getElementById('questions12');
// let questions13 = document.getElementById('questions13');
// main.style.display = "block";
// questions11.style.display = "none";
// questions12.style.display = "none";
// questions13.style.display = "none";
// }
// e1nter() {
// let main = document.getElementById('main');
// let questions11 = document.getElementById('questions11');
// let questions12 = document.getElementById('questions12');
// let questions13 = document.getElementById('questions13');
// main.style.display = "none";
// questions11.style.display = "none";
// questions12.style.display = "block";
// questions13.style.display = "none";
// }
// g1oBack2() {
// let main = document.getElementById('main');
// let questions11 = document.getElementById('questions11');
// let questions12 = document.getElementById('questions12');
// let questions13 = document.getElementById('questions13');
// main.style.display = "none";
// questions11.style.display = "block";
// questions12.style.display = "none";
// questions13.style.display = "none";

// }
// e1nter2() {
// let main = document.getElementById('main');
// let questions11 = document.getElementById('questions11');
// let questions12 = document.getElementById('questions12');
// let questions13 = document.getElementById('questions13');
// main.style.display = "none";
// questions11.style.display = "none";
// questions12.style.display = "none";
// questions13.style.display = "block";
// }
// g1oBack3() {
// let main = document.getElementById('main');
// let questions11 = document.getElementById('questions11');
// let questions12 = document.getElementById('questions12');
// let questions13 = document.getElementById('questions13');
// main.style.display = "none";
// questions11.style.display = "none";
// questions12.style.display = "block";
// questions13.style.display = "none";
// }

}