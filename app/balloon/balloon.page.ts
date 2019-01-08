import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestapiService} from '../restapi.service'
@Component({
  selector: 'app-balloon',
  templateUrl: './balloon.page.html',
  styleUrls: ['./balloon.page.scss'],
})
export class BalloonPage implements OnInit {

  constructor(public router:Router, public api:RestapiService) { }

  ngOnInit() {
  }




  max =0;

  // Keep and display the score
  count = 0;
  upcount() {
  this.count++;
  if (this.count >this.max){
    this.max=this.count
  }
  // let sound = document.getElementById("sound");
  // sound.play();
  console.log(this.count)
  }

  showhide() {
    let list = document.getElementById('list');
    let btn = document.getElementById('changebtn');
    if (list.style.display == 'none') {
        list.style.display = 'block';
        btn.innerHTML = 'Hide Instruction'
    } else {
        list.style.display = 'none';
        btn.innerHTML = 'Show Instrucion'
    }
}

dotsh() {
    let hidebtn = document.getElementById('changebtn1');
    let hidebtn1 = document.getElementById('root');
    var z = setInterval(function () {
        hidebtn.style.display = 'none'
    }, 1);
    var y = setInterval(function () {
        hidebtn1.style.display = 'none'
    }, 1);
    
    var a = setInterval(function () {
        let dot = document.getElementById('dot1');
        if (dot.style.display == 'none') {
            dot.style.display = 'block';
        } else {
            dot.style.display = 'none';
        }
    }, 500);

    var b = setInterval(function () {
        let dot = document.getElementById('dot2');
        if (dot.style.display == 'none') {
            dot.style.display = 'block';
        } else {
            dot.style.display = 'none';
        }
    }, 600);
    var c = setInterval(function () {
        let dot = document.getElementById('dot3');
        if (dot.style.display == 'none') {
            dot.style.display = 'block';
        } else {
            dot.style.display = 'none';
        }
    }, 400);
    setTimeout(function () {
        clearInterval(a);
    }, 5000);
    setTimeout(function () {
        clearInterval(b);
    }, 5000);
    setTimeout(function () {
        clearInterval(c);
    }, 5000);
    setTimeout(function () {
        clearInterval(z);
    }, 5000);
    setTimeout(function () {
        clearInterval(y);
    }, 5000);

    var d = setInterval(function () {

        let create = document.getElementById('result');
        create.innerHTML = `YOUR SCORE ${this.count} <br>
        HIGH SCORE: ${this.max}`;
        create.style.display = 'block';
        hidebtn.style.display = 'block';
        hidebtn1.style.display = 'block';
        
        if (this.count > 0) {
          this.count = 0
        }
    }, 5000);
    setTimeout(function () {
        clearInterval(d);
    }, 5001);
    var e = setInterval(function () {
        let i = document.getElementById('newgame');
        i.style.display = 'block';
    }, 5000);
    setTimeout(function () {
        clearInterval(e);
    }, 5001);
}
// pop 2nd page
clickyes() {
    let yes = document.getElementById('yes');
    yes.style.display = 'none';
    let page2 = document.getElementById('page2');
    page2.style.display = 'block';
}
// pop 3rd page
clicksubmit() {
    let submit = document.getElementById('page3');
    submit.style.display = 'block';
    let page2 = document.getElementById('page2');
    page2.style.display = 'none';
    let create1 = document.getElementById('point');
        create1.innerHTML = `+${this.max} ⭐`
    setTimeout(() => {
        this.api.User.stars = this.api.User.stars + this.max;
      this.router.navigate(['/home'])
    }, 2000);
}


}