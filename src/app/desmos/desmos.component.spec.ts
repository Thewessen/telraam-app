import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesmosComponent } from './desmos.component';

describe('DesmosComponent', () => {
  let component: DesmosComponent;
  let fixture: ComponentFixture<DesmosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesmosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
