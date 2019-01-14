import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.page.html',
  styleUrls: ['./tic-tac-toe.page.scss'],
})
export class TicTacToePage implements OnInit {

  qxo = [
    {value:'x', color:'primary'},
    {value:'o', color:'secondary'},
    {value:'x', color:'primary'},
    {value:'o', color:'secondary'},
    {value:'x', color:'primary'},
    {value:'o', color:'secondary'},
    {value:'x', color:'primary'},
    {value:'o', color:'secondary'},
  ];
  q1 = [{}];
  q2 = [{}];
  q3 = [{}];
  q4 = [{}];
  q5 = [{}];
  q6 = [{}];
  q7 = [{}];
  q8 = [{}];
  q9 = [{}];

  todo = { value: '', color: '' };
  selectedQuadrant = 'q1';
  
  constructor(private dragulaService: DragulaService, 
              private toastController: ToastController,
              private router:Router) {

    this.dragulaService.drag('bag')
    .subscribe(({ name, el, source }) => {
      el.setAttribute('color', 'danger');
    });

    // this.dragulaService.removeModel('bag')
    // .subscribe(({ item }) => {
    //   this.toastController.create({
    //     message: 'Removed: ' + item.value,
    //     duration: 2000
    //   }).then(toast => toast.present());
    // });
 
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

  addTodo() {
    switch (this.selectedQuadrant) {
      case 'q1':
        this.todo.color = 'primary';
        break;
      case 'q2':
        this.todo.color = 'secondary';
        break;
      case 'q3':
        this.todo.color = 'tertiary';
        break;
      case 'q4':
        this.todo.color = 'warning';
        break;
      case 'q5':
        this.todo.color = 'primary';
        break;
      case 'q6':
        this.todo.color = 'secondary';
        break;
      case 'q7':
        this.todo.color = 'tertiary';
        break;
      case 'q8':
        this.todo.color = 'primary';
        break;
      case 'q9':
        this.todo.color = 'secondary';
        break;
    }
    this[this.selectedQuadrant].push(this.todo);
    this.todo = { value: '', color: '' };
  }

  back(){
    this.router.navigate(['/home'])
    this.dragulaService.destroy('bag');
  }
  

}