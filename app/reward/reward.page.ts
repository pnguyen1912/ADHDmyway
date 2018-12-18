import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';
import {Calendar} from '@ionic-native/calendar/ngx';
@Component({
  selector: 'app-reward',
  templateUrl: './reward.page.html',
  styleUrls: ['./reward.page.scss'],
})
export class RewardPage implements OnInit {

public FirstName: string;

  constructor(public router:Router,
    private api:ApiService,
    private calendar: Calendar) { }

  ngOnInit() {
  }
  change(){
    this.router.navigate(['/acharacter'])
  }
  getdata(){
    const theData = this.api.getMethod('people');
    // this.FirstName = theData[0];
  }
  // add10(){
  //   this.api.select = this.api.select+10;
  // }
  // print(){
  //   console.log(this.api.select)
  // }
}
