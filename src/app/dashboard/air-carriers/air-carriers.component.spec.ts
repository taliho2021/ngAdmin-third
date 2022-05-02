import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCarriersComponent } from './air-carriers.component';

describe('AirCarriersComponent', () => {
  let component: AirCarriersComponent;
  let fixture: ComponentFixture<AirCarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirCarriersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirCarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
