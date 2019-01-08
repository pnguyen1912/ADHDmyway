import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import {amedical } from '../app/amedical';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  // public medical = {
  // items: {},
  // items1: {},
  // items2: {},
  // items3: {},
  // items4: {},
  // items5: {},
  // items6: {},
  // items7: {},
  // options: {},
  // genders: {},
  // birthDate: 0,
  // zipcode: {},
  // inputValue: "none",
  // singleValue: "none",
  // singleValue1: "none",
  // singleValue2: "none",
  // singleValue3: "none",
  // singleValue4: "none",
  // singleValue5: "none",
  // singleValue6: "none",
  // singleValue7: "none",
  // singleValue8: "none",
  // singleValue9: "none",
  // singleValue10: "none",
  // singleValue11: "none",
  // singleValue12: "none",
  // singleValue13: "none",
  // singleValue14: "none",
  // singleValue15: "none",

  // checkedItems: {},
  // checkedItems1: {},
  // checkedItems2: {},
  // checkedItems3: {},
  // checkedItems4: {},
  // checkedItems5: {},
  // checkedItems6: {},
  // checkedItems7: {},
  // checkedOptions: {},
  // checkedGender: {},

  // }

  SelectedValue: any;
  checkedItems: any;
  checkedItems1: any;
  checkedItems2: any;
  checkedItems3: any;
  checkedItems4: any;
  checkedItems5: any;
  checkedItems6: any;
  checkedItems7: any;
  checkedOptions: any;
  checkedGender: any;
  inputValue: any;
  inputValue1: any;
  inputValue2: any;
  inputValue3: any;
  singleValue: any;
  singleValue1: any;
  singleValue2: any;
  singleValue3: any;
  singleValue4: any;
  singleValue5: any;
  singleValue6: any;
  singleValue7: any;
  singleValue8: any;
  singleValue9: any;
  singleValue10: any;
  singleValue11: any;
  singleValue12: any;
  singleValue13: any;
  singleValue14: any;
  singleValue15: any;

  public medical = {
    checkedItems: this.checkedItems,
    checkedItems1: this.checkedItems,
    checkedItems2: this.checkedItems ,
    checkedItems3: this.checkedItems ,
    checkedItems4: this.checkedItems ,
    checkedItems5: this.checkedItems ,
    checkedItems6: this.checkedItems ,
    checkedItems7: this.checkedItems ,
    checkedOptions: this.checkedItems ,
    checkedGender: this.checkedItems,
    inputValue: this.inputValue,
    inputValue1: this.inputValue1,
    inputValue2: this.inputValue2,
    inputValue3: this.inputValue3,
    
    singleValue: this.singleValue ,
    singleValue1: this.singleValue1 ,
    singleValue2: this.singleValue2 ,
    singleValue3: this.singleValue3 ,
    singleValue4: this.singleValue4 ,
    singleValue5: this.singleValue5 ,
    singleValue6: this.singleValue6 ,
    singleValue7: this.singleValue7 ,
    singleValue8: this.singleValue8 ,
    singleValue9: this.singleValue9 ,
    singleValue10: this.singleValue10 ,
    singleValue11: this.singleValue11 ,
    singleValue12: this.singleValue12 ,
    singleValue13: this.singleValue13 ,
    singleValue14: this.singleValue14 ,
    singleValue15: this.singleValue15 ,
    

  }














  public User = {
    select: 1,
    stars: 3000,
    level: 1,
    boot: false,
    glove: false,
    dailymood: {
      smile: 0,
      neutral: 0,
      mad: 0,
    },
    test: 'hello',
    task: {
      todo: [],
      doing: [],
      done: [],
    },
    task1: {
      todo: [],
      doing: [],
      done: [],
    },
    task2: {
      todo: [],
      doing: [],
      done: [],
    },
    
  }
  constructor(private http: HttpClient) {}

  getMethod(endpoint: string) {
    this.http.get('https://ghibliapi.herokuapp.com/' + endpoint)
      .subscribe((data) => {
        console.log(data);
        return data;
      }, (err) => {
        console.log(err);
        return err;
      })
  }

  gibi(msg: string) {
    console.log(msg)
  }
  
  getobject() {
    return this.User;
  }
  test() {
    console.log(this.medical);
  }
  test1(){
    console.log(this.SelectedValue)
  }
}




