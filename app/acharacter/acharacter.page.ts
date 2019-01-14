import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-acharacter',
  templateUrl: './acharacter.page.html',
  styleUrls: ['./acharacter.page.scss'],
})
export class AcharacterPage implements OnInit {

  constructor(public api: RestapiService, private router: Router) { }

  ngOnInit() {
  }
  
  goNext() {
    let g1 = document.getElementById('g1')
    let g2 = document.getElementById('g2')
    let g3 = document.getElementById('g3')
    let b1 = document.getElementById('b1')
    let b2 = document.getElementById('b2')
    let b3 = document.getElementById('b3')
    if (g1.style.display == 'block') {
        g1.style.display = 'none';
        g2.style.display = 'block';
        this.api.User.select = 2;
        
        console.log(this.api.User.select)
    } else if (g2.style.display == 'block') {
        g2.style.display = 'none';
        g3.style.display = 'block';
        this.api.User.select = 3;console.log(this.api.User.select)
    } else if (g3.style.display == 'block') {
        g3.style.display = 'none';
        b1.style.display = 'block';
        this.api.User.select = 4;console.log(this.api.User.select)
    } else if (b1.style.display == 'block') {
        b1.style.display = 'none';
        b2.style.display = 'block';
        this.api.User.select = 5;console.log(this.api.User.select)
    } else if (b2.style.display == 'block') {
        b2.style.display = 'none';
        b3.style.display = 'block';
        this.api.User.select = 6;console.log(this.api.User.select)
    } else if (b3.style.display = 'block') {
        b3.style.display = 'none';
        g1.style.display = 'block';
        this.api.User.select = 1;console.log(this.api.User.select)
    }
}


goBack() {
    let g1 = document.getElementById('g1')
    let g2 = document.getElementById('g2')
    let g3 = document.getElementById('g3')
    let b1 = document.getElementById('b1')
    let b2 = document.getElementById('b2')
    let b3 = document.getElementById('b3')
    if (g1.style.display == 'block') {
        g1.style.display = 'none';
        b3.style.display = 'block';
        this.api.User.select = 6;
    } else if (g2.style.display == 'block') {
        g2.style.display = 'none';
        g1.style.display = 'block';
        this.api.User.select = 1;
    } else if (g3.style.display == 'block') {
        g3.style.display = 'none';
        g2.style.display = 'block';
        this.api.User.select = 2;
    } else if (b1.style.display == 'block') {
        b1.style.display = 'none';
        g3.style.display = 'block';
        this.api.User.select = 3;
    } else if (b2.style.display == 'block') {
        b2.style.display = 'none';
        b1.style.display = 'block';
        this.api.User.select = 4;
    } else if (b3.style.display = 'block') {
        b3.style.display = 'none';
        b2.style.display = 'block';
        this.api.User.select = 5;
    }
}


dash() {
    // if (this.api.User.stars >0){
    //     this.router.navigate(['/home'])}
    //     else {
    this.router.navigate(['/home']);
// }
}
}


