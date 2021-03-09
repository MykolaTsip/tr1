import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
    ) { }

  ngOnInit(): void {
  }


  @HostListener('mouseover') onHover() {
    alert('hover');
    this.el.nativeElement.style.backgroundColor = 'black'
  }

}
