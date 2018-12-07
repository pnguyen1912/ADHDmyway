import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor() { }

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
    } else if (g2.style.display == 'block') {
        g2.style.display = 'none';
        g3.style.display = 'block';
    } else if (g3.style.display == 'block') {
        g3.style.display = 'none';
        b1.style.display = 'block';
    } else if (b1.style.display == 'block') {
        b1.style.display = 'none';
        b2.style.display = 'block';
    } else if (b2.style.display == 'block') {
        b2.style.display = 'none';
        b3.style.display = 'block';
    } else if (b3.style.display = 'block') {
        b3.style.display = 'none';
        g1.style.display = 'block'
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
    } else if (g2.style.display == 'block') {
        g2.style.display = 'none';
        g1.style.display = 'block';
    } else if (g3.style.display == 'block') {
        g3.style.display = 'none';
        g2.style.display = 'block';
    } else if (b1.style.display == 'block') {
        b1.style.display = 'none';
        g3.style.display = 'block';
    } else if (b2.style.display == 'block') {
        b2.style.display = 'none';
        b1.style.display = 'block';
    } else if (b3.style.display = 'block') {
        b3.style.display = 'none';
        b2.style.display = 'block'
    }
}
  ngOnInit() {
  }

}
