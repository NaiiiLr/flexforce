import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaPersonalPage } from './tela-personal.page';

describe('TelaPersonalPage', () => {
  let component: TelaPersonalPage;
  let fixture: ComponentFixture<TelaPersonalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelaPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
