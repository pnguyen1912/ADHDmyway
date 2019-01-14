import {
  Component,
  OnInit
} from '@angular/core';
import {
  Storage
} from '@ionic/storage';
import { RestapiService } from '../restapi.service';

@Component({
  template: '',
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  // styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  inputStuff: string;

  showData: string;



  loopArray = [];
  // loopObjectValues = [this.loopObjectValues = Object.values(loopObject)];

  constructor(
    public api:RestapiService,
    private storage: Storage) {}

  ngOnInit() {

  }
  saveVariable() {
    this.storage.set('myVariable', this.inputStuff).then((success) => {
      console.log('successfully stored');
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

  }

}