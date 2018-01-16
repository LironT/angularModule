/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SecdoNgComponent } from './secdo-ng.component';

import {RedComponentComponent} from "./red-component/red-component.component";
import {AgGridModule} from "ag-grid-angular";
import {SecdoGridComponent} from "./secdo-grid/secdo-grid.component";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SecdoNgComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SecdoNgComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(SecdoNgComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(SecdoNgComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents(
          [RedComponentComponent]
        )
      ],
      declarations: [
        SecdoNgComponent, SecdoGridComponent, RedComponentComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SecdoNgComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
