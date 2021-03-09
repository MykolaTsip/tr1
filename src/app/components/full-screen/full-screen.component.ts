import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {

  full: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  FullScreen() {
    const body = document.documentElement

      if(!document.fullscreenElement) {
        body.requestFullscreen();
        this.full = true
      }
      else {
        document.exitFullscreen();
        this.full = false
      }

  }


  Mini() {
    if(document.documentElement) {
      document.exitFullscreen();
    }
    // else if(document.webkitRequestFullscreen ) {
    //   document.webkitRequestFullscreen();
    // } else if(document.mozRequestFullscreen) {
    //   document.mozRequestFullScreen();
    // }
  }
}
