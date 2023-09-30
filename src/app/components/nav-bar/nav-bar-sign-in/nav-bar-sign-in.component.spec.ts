import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSignInComponent } from './nav-bar-sign-in.component';

describe('NavBarSignInComponent', () => {
  let component: NavBarSignInComponent;
  let fixture: ComponentFixture<NavBarSignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarSignInComponent]
    });
    fixture = TestBed.createComponent(NavBarSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
