import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfsTerminalOperComponent } from './cfs-terminal-oper.component';

describe('CfsTerminalOperComponent', () => {
  let component: CfsTerminalOperComponent;
  let fixture: ComponentFixture<CfsTerminalOperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfsTerminalOperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfsTerminalOperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
