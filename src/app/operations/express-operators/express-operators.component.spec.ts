import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressOperatorsComponent } from './express-operators.component';

describe('ExpressOperatorsComponent', () => {
  let component: ExpressOperatorsComponent;
  let fixture: ComponentFixture<ExpressOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
