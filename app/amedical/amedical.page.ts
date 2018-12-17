import { Component } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-medical',
  templateUrl: './amedical.page.html',
  styleUrls: ['./amedical.page.scss'],
})
export class AmedicalPage {

  x: boolean;
  element: HTMLElement;
  change1:boolean = false;
  change2:boolean = false;
  change3:boolean = false;
  change4:boolean = false;
  chose : number = 0;

  constructor(private router: Router) {}

  yes () {
    let have = document.getElementById('have');
    let whatKind = document.getElementById('whatKind');
    let stim = document.getElementById('stim');
    let nonstim = document.getElementById('nonstim');
    let anti = document.getElementById('anti');
    let anxiety = document.getElementById('anxiety');
    let back = document.getElementById('back');
    have.style.display = "none";
    whatKind.style.display = "block";
    stim.style.display = "none";
    nonstim.style.display = "none";
    anti.style.display = "none";
    anxiety.style.display = "none";
    back.style.display = "none";
  }
  next() {
 
    let have = document.getElementById('have');
    let whatKind = document.getElementById('whatKind');
    let stim = document.getElementById('stim');
    let nonstim = document.getElementById('nonstim');
    let anti = document.getElementById('anti');
    let anxiety = document.getElementById('anxiety');
    let back = document.getElementById('back');
    let next1 = document.getElementById('next1');
    whatKind.style.display ='none';
if (this.change1 == true){stim.style.display = 'block'};
if (this.change2 == true){nonstim.style.display = 'block'};
if (this.change3 == true){anti.style.display = 'block'};
if (this.change4 == true){anxiety.style.display = 'block'};
back.style.display = "block";
next1.style.display = "block";


}

    
  
  change11(){
    this.change1 = true;
    // this.chose++;
  }
  change12(){
    this.change2 = true;
    // this.chose++;

  }
  change13(){
    this.change3 = true;
    // this.chose++;

  }
  change14(){
    this.change4 = true;
    // this.chose++;

  }

  back() {
    let have = document.getElementById('have');
    let whatKind = document.getElementById('whatKind');
    let stim = document.getElementById('stim');
    let nonstim = document.getElementById('nonstim');
    let anti = document.getElementById('anti');
    let anxiety = document.getElementById('anxiety');
    have.style.display = "block";
    whatKind.style.display = "none";
    stim.style.display = "none";
    nonstim.style.display = "none";
    anti.style.display = "none";
    anxiety.style.display = "none";
  }
mainHome(){
  this.router.navigate(['/acharacter']);
}
next1(){
  this.router.navigate(['/acharacter']);
}

}
