import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {
  public x1: number;
  public y1: number;

  public x2: number;
  public y2: number;

  private firstClick  = true;

  public Points: any[];

  constructor() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 400;
    this.y2 = 400;
  }

  ngOnInit() {
  }

  setPoint(event: any) {
    if (this.firstClick) {
      this.x1 = this.x2 = event.clientX.toString();
      this.y1 = this.y2 = event.clientY.toString();
    } else {
      this.x1 = event.clientX.toString();
      this.y1 = event.clientY.toString();
    }
    this.firstClick = !this.firstClick;
    console.log(event.clientX, event.clientY);
  }
}
