import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import * as HighCharts from 'highcharts';
import {Router } from '@angular/router';
import {
  RestapiService
} from '../restapi.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  name: "Name";
  constructor(public navCtrl: NavController, private router: Router, private api: RestapiService) { }

  ngOnInit() {
    // let myChart = document.getElementById('container');

     let myChart = HighCharts.chart('container', {
      chart: {
        type: 'bar'
      },  
      title: {
        text: 'Users progress'
      },
      xAxis: {
        categories: ['Happy', 'Neutral', 'Sad']
      },
      yAxis: {
        title: {
          text: 'Times A Week'
        }
      },
    //   series: [{
    //     name: 'Cesar',
    //     data: [this.api.User.dailymood.smile, this.api.User.dailymood.neutral, this.api.User.dailymood.mad],
    //   }
    // ]
    });
  }

  // back() {
  //   this.router.navigate(['/parent']);
  // }

  // ionViewDidLoad() {
  //   // let myChart = document.getElementById('container');

  //    let myChart = HighCharts.chart('container', {
  //     chart: {
  //       type: 'bar'
  //     },  
  //     title: {
  //       text: 'Progress'
  //     },
  //     xAxis: {
  //       categories: ['HomeWork', 'Tasks', 'Challenges']
  //     },
  //     yAxis: {
  //       title: {
  //         text: 'Times A Week'
  //       }
  //     },
  //     series: [{
  //       name: 'Chip',
  //       data: [5, 1, 1]
  //     }, 
  //   ]
  //   });
  // }

}


