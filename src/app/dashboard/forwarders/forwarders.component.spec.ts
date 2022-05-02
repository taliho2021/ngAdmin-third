import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardersComponent } from './forwarders.component';

describe('ForwardersComponent', () => {
  let component: ForwardersComponent;
  let fixture: ComponentFixture<ForwardersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
