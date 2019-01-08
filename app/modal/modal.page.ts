import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';
import * as HighCharts from 'highcharts';
import {
  RestapiService
} from '../restapi.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  title = "string"; 
  message = "no";
  text = "no";

  graph = "";

  constructor(public router: Router, private modalCtrl: ModalController, private params: NavParams,
    private api: RestapiService) { }

  ngOnInit() {
    this.title = this.params.get("Title");
    this.message = this.params.get("message");
    this.text = this.params.get("text");
    this.graph = this.params.get("");
    
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ionViewDidLoad() {
    // let myChart = document.getElementById('container');
    let mes = document.getElementById('mes');
    let text = document.getElementById('text');

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
      // series: {
      //   name: 'Cesar',
      //   data: [this.api.User.dailymood.smile, this.api.User.dailymood.neutral, this.api.User.dailymood.mad],
      // }
    
    
    });
    
    mes.style.display = "none";
    text.style.display = "block"
  }
  





}
