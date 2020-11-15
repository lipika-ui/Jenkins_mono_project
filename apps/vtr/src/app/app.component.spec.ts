import {​​​​​​​​ DebugElement }​​​​​​​​ from '@angular/core';
import {​​​​​​​​ async, ComponentFixture, TestBed }​​​​​​​​ from '@angular/core/testing';
import {​​​​​​​​ By }​​​​​​​​ from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
let fixture: ComponentFixture<AppComponent>
let debugelm: DebugElement


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vtr'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('vtr');
  });
  it('counter should be 1', () => {​​​​​
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.counter).toEqual('0')
    }​​​​​);
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to vtr!'
    );
  });
});
