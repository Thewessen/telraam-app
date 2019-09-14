import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef } from '@angular/core';

declare const MQ: any;

@Component({
  selector: 'app-math-input',
  templateUrl: './math-input.component.html',
  styleUrls: ['./math-input.component.scss']
})
export class MathInputComponent implements OnInit {
  @ViewChild('mathfieldobj', { static: true }) mqmathfield: ElementRef;

  @ViewChild('staticmathobj', { static: true }) mqstaticmath: ElementRef;

  @ViewChild('mathonpage', { static: true }) mqmathonpage: ElementRef;

  public mathOnPage: string;

  constructor() {
    this.mathOnPage = 'ax^2+bx+c=0';
  }

  ngOnInit() {
    const mathField = MQ.MathField(this.mqmathfield.nativeElement);
  }

  AfterViewInit() {
    MQ.StaticMath(this.mqstaticmath.nativeElement);
    const staticmath = MQ.StaticMath(this.mqmathonpage.nativeElement);
  }

}
