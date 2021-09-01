import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccecPageComponent } from './succec-page.component';

describe('SuccecPageComponent', () => {
  let component: SuccecPageComponent;
  let fixture: ComponentFixture<SuccecPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccecPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
