import {
  Component,
  OnInit
} from '@angular/core';
import {
  Storage
} from '@ionic/storage';

@Component({
  template: '',
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  // styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  inputStuff: string;
  inputStuff1: string;
  inputStuff2: string;
  inputStuff3: string;
  showData: string;
  showData1: string;
  showData2: string;
  showData3: string;


  loopArray = [];
  // loopObjectValues = [this.loopObjectValues = Object.values(loopObject)];

  constructor(private storage: Storage) {}

  ngOnInit() {
    this.loopArray.push('crazy', 'buddy', 'monkey');

    const loopObject = {
      crazy: 'happy',
      buddy: 'monkey',
      friend: 'thoughts'
    };
  }
  saveVariable() {
    this.storage.set('myVariable', this.inputStuff).then((success) => {
      console.log('successfully stored');
    }, (err) => {
      console.log(err);
    });
    this.storage.set('myVariable1', this.inputStuff1).then((success) => {
      console.log('successfully stored1');
    }, (err) => {
      console.log(err);
    });
    this.storage.set('myVariable2', this.inputStuff2).then((success) => {
      console.log('successfully stored2');
    }, (err) => {
      console.log(err);
    });
    this.storage.set('myVariable3', this.inputStuff3).then((success) => {
      console.log('successfully stored3');
    }, (err) => {
      console.log(err);
    });
  }
  getVariable() {
    this.storage.get('myVariable').then((data) => {
      console.log('myData: ', data);
      this.showData = data;
    }, (err) => {
      console.log(err);
    });
    this.storage.get('myVariable1').then((data1) => {
      console.log('myData: ', data1);
      this.showData1 = data1;
    }, (err) => {
      console.log(err);
    });
    this.storage.get('myVariable2').then((data2) => {
      console.log('myData: ', data2);
      this.showData2 = data2;
    }, (err) => {
      console.log(err);
    });
    this.storage.get('myVariable3').then((data3) => {
      console.log('myData: ', data3);
      this.showData3 = data3;
    }, (err) => {
      console.log(err);
    });
  }
}