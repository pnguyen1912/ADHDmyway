import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { CognitoService } from '../cognito.service';
import { Storage } from '@ionic/storage';
// import { HomePage } from './home/home.page';
import {RestapiService} from '../restapi.service';


@Component({
  selector: 'app-settings',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(public cognito:CognitoService,private router: Router, private storage: Storage, private api: RestapiService) { }
  ngOnInit() {
    // this.storage.get('myVariable').then((data) => {
    //   console.log('myData: ', data);
    //   this.showData = data;
    //   }, (err) => {
    //   console.log(err);
    //   });
  }   

  gender() {
    this.api.test1();
  }
  
  dash() {
    this.router.navigate(['/home']);
  }
  med() {
    this.router.navigate(['/amedical']);
  }
  logout(){
    this.api.postData();
    this.router.navigate(['/alogin']);
    this.cognito.getAuthenticatedUser().signOut();
    console.log(this.cognito.getAuthenticatedUser());
  }

  parent() {
    this.router.navigate(['/parent']);
  }


}