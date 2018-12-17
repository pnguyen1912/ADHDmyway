import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { CognitoService } from '../cognito.service';

@Component({
  selector: 'app-settings',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage  {

  constructor(public cognito:CognitoService,private router: Router) { }

  dash() {
    this.router.navigate(['/home']);
  }

  med() {
    this.router.navigate(['/medical']);
  }
  logout(){
    this.cognito.getAuthenticatedUser().signOut();
    this.router.navigate(['/alogin']);
    console.log(this.cognito.getAuthenticatedUser());
  }

}