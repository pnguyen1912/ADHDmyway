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

}
