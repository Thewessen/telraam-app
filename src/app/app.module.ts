import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesmosComponent } from './desmos/desmos.component';
import { DrawingComponent } from './drawing/drawing.component';
import { MathInputComponent } from './math-input/math-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DesmosComponent,
    DrawingComponent,
    MathInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
