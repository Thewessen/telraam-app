import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { DesmosComponent } from '../desmos/desmos.component';
import { DrawingComponent } from '../drawing/drawing.component';
import { MathInputComponent } from '../math-input/math-input.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'desmos', component: DesmosComponent },
  { path: 'drawing', component: DrawingComponent },
  { path: 'mathinput', component: MathInputComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
