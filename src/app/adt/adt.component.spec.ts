import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdtComponent } from './adt.component';

describe('AdtComponent', () => {
  let component: AdtComponent;
  let fixture: ComponentFixture<AdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
