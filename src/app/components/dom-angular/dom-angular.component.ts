import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dom-angular',
  templateUrl: './dom-angular.component.html',
  styleUrls: ['./dom-angular.component.css']
})
export class DomAngularComponent implements OnInit, AfterViewInit {


  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.onlyRenderer2();
    this.renderer2WithElementRef();
  }


  onlyRenderer2(): void {
    // додавання елементу
    let div = this.renderer.createElement('div');
    let text = this.renderer.createText('it\'s text from Renderer2 (only renderer2)');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(document.body.querySelector('div.renderer'), div)
  }

  renderer2WithElementRef(): void {
    // вставленн перед елементом
    let div1 = this.renderer.createElement('div');
    let text1 = this.renderer.createText('i am not important text');
    this.renderer.setAttribute(div1,'height', '20');
    this.renderer.addClass(div1, 'n')
    this.renderer.appendChild(div1, text1);
    this.renderer.appendChild(this.el.nativeElement.querySelector('div.renderer'), div1)

    let NewP = this.renderer.createElement('p');
    let textForNotImportant = this.renderer.createText('i new text');
    this.renderer.appendChild(NewP, textForNotImportant)
    this.renderer.insertBefore(this.el.nativeElement.querySelector('div.renderer'), NewP,
      this.el.nativeElement.querySelector('div.n'))
  }


  @ViewChild('view') _viewElement: ElementRef;
  ngAfterViewInit() {
    const buttonEl = this.renderer.createElement('button');
    const text = this.renderer.createText('Text button');

    this.renderer.appendChild(buttonEl, text);
    this.renderer.appendChild(this._viewElement.nativeElement, buttonEl);

  }

  viewChild(): void {

  }
}
