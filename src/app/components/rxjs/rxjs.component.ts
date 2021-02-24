import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  btnI = document.getElementById('int')
  rxjsbtn = document.getElementById('rxjs')
  display = document.querySelector('.result')

  people = [
    {name: 'A', age: 25},
    {name: 'B', age: 25},
    {name: 'C', age: 25},
    {name: 'D', age: 25},
    {name: 'I', age: 25},
    {name: 'F', age: 25},
  ]



}
