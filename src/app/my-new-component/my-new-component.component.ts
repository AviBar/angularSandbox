import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
 // templateUrl: './my-new-component.component.html',
 template: '<h1>hey guys</h1>',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
