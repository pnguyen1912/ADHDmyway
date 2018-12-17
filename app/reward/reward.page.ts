import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.page.html',
  styleUrls: ['./reward.page.scss'],
})
export class RewardPage implements OnInit {

public FirstName: string;

  constructor(private api:ApiService) { }

  ngOnInit() {
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
