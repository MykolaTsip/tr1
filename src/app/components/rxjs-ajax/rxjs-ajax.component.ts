import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {fromEvent} from 'rxjs'
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs-ajax',
  templateUrl: './rxjs-ajax.component.html',
  styleUrls: ['./rxjs-ajax.component.css']
})
export class RxjsAjaxComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  @ViewChild('searchInput')
  input: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let url = 'https://api.github.com/search/users?q=';
    // let search = document.getElementById('search')

    console.log(this.input.nativeElement)

    const inputEvent$ = fromEvent(this.input.nativeElement, 'input')
      .pipe(
        // map(v => v.target.value)
      )

    inputEvent$.subscribe(v => console.log(v))
  }
}
