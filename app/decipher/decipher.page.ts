import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-decipher',
  templateUrl: './decipher.page.html',
  styleUrls: ['./decipher.page.scss'],
})
export class DecipherPage implements OnInit {

  qPool = [
    {value:'O'},
    {value:'H'},
    {value:'S'},
    {value:'O'},
    {value:'I'},
    {value:'A'}
    
];

  q1=[{}];
  q2=[{}];
  q3=[{}];
  q4=[{}];

  constructor(private dragulaService: DragulaService, 
    private toastController: ToastController,
    private router:Router) {
      this.dragulaService.drag('bag')
      .subscribe(({ name, el, source }) => {
        el.setAttribute('color', 'danger');
      });
      this.dragulaService.dropModel('bag')
      .subscribe(({ item }) => {
        item['color'] = 'success';
      });
      this.dragulaService.createGroup('bag', {
        removeOnSpill: true
      });
     }

  ngOnInit() {
  }

  exit(){
    this.router.navigate(['/home'])
    this.dragulaService.destroy('bag');
  };

  finished(){
    this.toastController.create({
      message: 'Correct!',
      duration: 2000
    }).then(toast => toast.present()),
    this.router.navigate(['/home']),
    this.dragulaService.destroy('bag');
    ;
  }

}