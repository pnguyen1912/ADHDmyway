import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public medical = {

  };
  
  public User = {
    select: 0,
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
      id: [],
    }
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
}