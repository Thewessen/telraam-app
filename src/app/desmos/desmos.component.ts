import {
  Component,
  OnInit,
  ViewChild,
  ElementRef } from '@angular/core';

declare const Desmos: any;

@Component({
  selector: 'app-desmos',
  templateUrl: './desmos.component.html',
  styleUrls: ['./desmos.component.scss']
})
export class DesmosComponent implements OnInit {
  // import desmos link @ index.html
  @ViewChild('calculator', { static: true }) graph: ElementRef;

  @ViewChild('minimumdes', { static: true }) min: ElementRef;

  @ViewChild('fourfunctioncalculator', { static: true }) fourfunction: ElementRef;
  @ViewChild('scientificcalculator', { static: true }) scientific: ElementRef;

  constructor() { }

  ngOnInit() {
  // these are the default options for the calculator
  const calculatorOptions = {
    keypad: true,
    graphpaper: true,
    expressions: true,
    settingsMenu: true,
    zoomButtons: true,
    expressionsTopbar: true,
    pointsOfInterest: true,
    trace: true,
    border: true,
    lockViewport: false,
    expressionsCollapsed: false,
    administerSecretFolders: false,
    images: true,
    imageUploadCallback: Desmos.imageFileToDataURL,
    folders: true,
    notes: true,
    links: true,
    qwertyKeyboard: true,
    restrictedFunctions: false,
    pasteGraphLink: false,
    pasteTableData: true,
    degreeMode: false,
    colors: Desmos.Colors,
    autosize: true
  };

  const calculator = Desmos.GraphingCalculator(
    this.graph.nativeElement,
    calculatorOptions
  );

  calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });

  const minimum = Desmos.GraphingCalculator(this.min.nativeElement, {
    keypad: false,
    expressions: false,
    settingsMenu: false,
    zoomButtons: false,
    expressionsTopbar: false,
    lockViewport: true
  });

  minimum.setExpression({ id: 'min1', latex: 'y^2+x^2=25' });
  minimum.updateSettings({
    xAxisMinorSubdivisions: 1,
    yAxisMinorSubdivisions: 1,
    xAxisStep: 1,
    yAxisStep: 1
  });

  const calculator1 = Desmos.FourFunctionCalculator(this.fourfunction.nativeElement);
  const calculator2 = Desmos.ScientificCalculator(this.scientific.nativeElement);
  calculator2.observeEvent('change', (() => {
    console.log(calculator2.getState());
  }));
}

}
