import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxCarComponent } from './max-car.component';

describe('MaxCarComponent', () => {
  let component: MaxCarComponent;
  let fixture: ComponentFixture<MaxCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
