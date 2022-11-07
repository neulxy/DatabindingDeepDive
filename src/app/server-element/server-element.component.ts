import { ContentChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };
  @Input('name') name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
