import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavConLoginComponent } from './nav-con-login.component';

describe('NavConLoginComponent', () => {
  let component: NavConLoginComponent;
  let fixture: ComponentFixture<NavConLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavConLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavConLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
