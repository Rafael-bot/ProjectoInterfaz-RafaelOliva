import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSinLoginComponent } from './nav-sin-login.component';

describe('NavSinLoginComponent', () => {
  let component: NavSinLoginComponent;
  let fixture: ComponentFixture<NavSinLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSinLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSinLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
