import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { CognitoService } from './cognito.service';
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';
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

  public iii = 0;
  public iii1 = 0;
  public iii2 = 0;

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

  public _data:any;










public report ={
  smile: [],
  neutral: [],
  mad:[],
}

  public User = {
    DOB: "1999-01-01",
    gender:"Male",
    nickname: "Default",
    firstname: "Firstname",
    lastname: "Lastname",
    ballonmax:0,
    select: 1,
    stars: 0,
    level: 1,
    experience:0,
    boot: false,
    glove: false,
    dailymood: {
      smile: 0,
      neutral: 0,
      mad: 0,
    },
    test: true,
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
    }
    
  }
  constructor(private cognitoService:CognitoService,private http: HttpClient) {
    // this.getData();
    // console.log(this.User)
  }

  
  getData(){
    let myUser = this.cognitoService.getAuthenticatedUser();
    if (myUser === null) {
      console.log("user is null");
      return;
    }
    
    myUser.getSession((err, session) => {
      if(err) {
        console.log("get error: ", err);
        return;
      }
      console.log('get session: ', session);
      
      const token = session['idToken']['jwtToken']; // session.getIdToken().getJwtToken();
      console.info('get token: ', token);

      // let myHeaders = new HttpHeaders({
      //  "Content-Type": "application/json",
      //  "Authorization": token
      //});

      //console.log('post headers', myHeaders);
      let postmoreData = {
        'Email': myUser.getUsername(),
      }
      
    // https://499adbe4a1.execute-api.us-east-2.amazonaws.com/dev/postToTable
      this.http.post('https://ceo7e027k2.execute-api.us-east-2.amazonaws.com/newtestStage/Realgetdata',JSON.stringify(postmoreData))
      .subscribe( response => {
        console.log(response)
        this._data = response;
        console.log("get success: ", this._data);
        // setTimeout(()=>{
        this.User.nickname = this._data.Item.User.M.nickname.S
        this.User.firstname = this._data.Item.User.M.firstname.S
        this.User.lastname = this._data.Item.User.M.lastname.S

          if (typeof this._data.Item.User.M.ballonmax.S == 'string'){
        this.User.ballonmax = parseInt(this._data.Item.User.M.ballonmax.S);
          } else {this.User.ballonmax = this._data.Item.User.M.ballonmax.N}

          if (typeof this._data.Item.User.M.select.S == 'string'){
        this.User.select = parseInt(this._data.Item.User.M.select.S);
          } else {this.User.select = this._data.Item.User.M.select.N}

          if (typeof this._data.Item.User.M.experience.S == 'string'){
        this.User.experience = parseInt(this._data.Item.User.M.experience.S);
          } else {this.User.experience = this._data.Item.User.M.experience.N}

        if (typeof this._data.Item.User.M.level.S == 'string'){
        this.User.level = parseInt(this._data.Item.User.M.level.S);
          } else {this.User.level = this._data.Item.User.M.level.N;}

        if (typeof this._data.Item.User.M.stars.S == 'string'){
        this.User.stars = parseInt(this._data.Item.User.M.stars.S);
          } else {this.User.stars =this._data.Item.User.M.stars.N;}

        this.User.boot = this._data.Item.User.M.boot.BOOL;
        this.User.glove = this._data.Item.User.M.glove.BOOL;

        if (typeof this._data.Item.User.M.dailymood.M.mad.S == 'string'){
          this.User.dailymood.mad = parseInt(this._data.Item.User.M.dailymood.M.mad.S);
            } else {this.User.dailymood.mad = this._data.Item.User.M.dailymood.M.mad.N;}

        if (typeof this._data.Item.User.M.dailymood.M.neutral.S == 'string'){
        this.User.dailymood.neutral = parseInt(this._data.Item.User.M.dailymood.M.neutral.S);
          } else {this.User.dailymood.neutral = this._data.Item.User.M.dailymood.M.neutral.N;}

        if (typeof this._data.Item.User.M.dailymood.M.smile.S == 'string'){
        this.User.dailymood.smile = parseInt(this._data.Item.User.M.dailymood.M.smile.S);
          } else {this.User.dailymood.smile = this._data.Item.User.M.dailymood.M.smile.N;}
        
        let i1=0
        while(i1<this._data.Item.User.M.task.M.todo.L.length){
          this.User.task.todo[i1]=this._data.Item.User.M.task.M.todo.L[i1].S
          i1=i1+1;
       
        }
        let i2=0
        while(i2<this._data.Item.User.M.task.M.doing.L.length){
          this.User.task.doing[i2]=this._data.Item.User.M.task.M.doing.L[i2].S
          i2=i2+1;
        }
        let i3=0
        while(i3<this._data.Item.User.M.task.M.done.L.length){
          this.User.task.done[i3]=this._data.Item.User.M.task.M.todo.L[i3].S
          i3=i3+1;
        }
        console.log(this.User)
      // },1000)
      //  console.log(this.User)


      }, err => {
        console.log("get error: ", err);
      });

    })
  }




  postData() {
    let myUser = this.cognitoService.getAuthenticatedUser();
    if (myUser === null) {
      console.log("user is null");
      return;
    }

    myUser.getSession((err, session) => {
      if(err) {
        console.log("post error: ", err);
        return;
      }
      console.log('post session: ', session);
      
      const token = session['idToken']['jwtToken']; // session.getIdToken().getJwtToken();
      console.info('post token: ', token);

      let myHeaders = new HttpHeaders({
       "Content-Type": "application/json",
       "Authorization": token
      });

      //console.log('post headers', myHeaders);

      let postData = {
        'Email': myUser.getUsername(),
        
        // 'select': this.User.select,
        // 'stars': this.User.stars,
        // 'level': this.User.level,
        // 'boot': false,
        // 'glove': false,
       'User' : this.User 
      }
      console.log("postdata: ", postData);
    // https://499adbe4a1.execute-api.us-east-2.amazonaws.com/dev/postToTable
      this.http.post('https://ceo7e027k2.execute-api.us-east-2.amazonaws.com/newtestStage/petfood', JSON.stringify(postData),
      {headers : myHeaders})
      .subscribe( response => {
        console.log("post success: ", response);
      }, err => {
        console.log("post error: ", err);
      });
      
    });

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




