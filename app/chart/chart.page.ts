import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import * as HighCharts from 'highcharts';
import {Router } from '@angular/router';
import {RestapiService} from '../restapi.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {

  name: "Name"; 
  constructor(private api: RestapiService, public navCtrl: NavController, private router: Router) { }

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
        categories: ['Homework', 'Tasks', 'Challenges']
      },
      yAxis: {
        title: {
          text: 'Times A Week'
        }
      },
    //   series: [{
    //     name: 'Chip',
    //     data: [this.api.iii, this.api.iii1, this.api.iii2] 
    //   }, 
    // ]
    });
  }

  back() {
    this.router.navigate(['/parent']);
  }

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
  //   //   series: [{
  //   //     name: 'Chip',
  //   //     data: [5, 1, 1]
  //   //   }, 
  //   // ]
  //   });
  // }

  





}
