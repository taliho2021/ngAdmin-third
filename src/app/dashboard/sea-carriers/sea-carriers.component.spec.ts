import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaCarriersComponent } from './sea-carriers.component';

describe('SeaCarriersComponent', () => {
  let component: SeaCarriersComponent;
  let fixture: ComponentFixture<SeaCarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaCarriersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaCarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
