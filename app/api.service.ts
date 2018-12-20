import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getMethod(endpoint:string){
    this.http.get('https://ghibliapi.herokuapp.com/'+endpoint)
    .subscribe((data) => {
      console.log(data);
      return data;
    }, (err) => {console.log(err);
      return err;
    }) 
  }

  gibi(msg: string){
    console.log(msg)
  }
  User = {
  select: 0,
  dailymood: {smile: 0,
  neutral:  0,
  mad: 0,},
  task:{}
}

}
