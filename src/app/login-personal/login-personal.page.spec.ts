import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPersonalPage } from './login-personal.page';

describe('LoginPersonalPage', () => {
  let component: LoginPersonalPage;
  let fixture: ComponentFixture<LoginPersonalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
