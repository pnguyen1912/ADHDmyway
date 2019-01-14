import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor( private router: Router,
    public api:RestapiService) { }
created = false;
  ngOnInit() {
    let char=document.getElementById('charchar');
    if (this.created == false){
      let chec = document.createElement('img');
     if (this.api.User.select == 1) {
      chec.src = 'assets/girl1.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 2) {
      chec.src = 'assets/girl2.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 3) {
      chec.src = 'assets/girl3.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 4) {
      chec.src = 'assets/boy1.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 5) {
      chec.src = 'assets/boy2.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 6) {
      chec.src = 'assets/boy3.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 11) {
      chec.src = 'assets/girl1b.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 22) {
      chec.src = 'assets/girl2b.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 33) {
      chec.src = 'assets/girl3b.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 44) {
      chec.src = 'assets/boy1b.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 55) {
      chec.src = 'assets/boy2b.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 66) {
      chec.src = 'assets/boy3b.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 111) {
      chec.src = 'assets/girl1g.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 222) {
      chec.src = 'assets/girl2g.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 333) {
      chec.src = 'assets/girl3g.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 444) {
      chec.src = 'assets/boy1g.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 555) {
      chec.src = 'assets/boy2g.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 666) {
      chec.src = 'assets/boy3g.png'
      console.log(this.api.User.select)
    } else if (this.api.User.select == 1111) {
      chec.src = 'assets/girl1bg.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 2222) {
      chec.src = 'assets/girl2bg.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 3333) {
      chec.src = 'assets/girl3bg.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 4444) {
      chec.src = 'assets/boy1bg.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 5555) {
      chec.src = 'assets/boy2bg.png'
      console.log(this.api.User.select)
    }else if (this.api.User.select == 6666) {
      chec.src = 'assets/boy3bg.png'
      console.log(this.api.User.select)
    }
    char.style.height = '20%';
    char.appendChild(chec)
    
    char.style.display = 'inline-block';
    this.created = true;
    } else {
      console.log('already created')
    }
  }

  reward() {
    this.router.navigate(['../reward'])
  }

  tasks() {
    this.router.navigate(['../list'])
  }

}