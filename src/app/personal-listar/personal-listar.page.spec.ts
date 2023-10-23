import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalListarPage } from './personal-listar.page';

describe('PersonalListarPage', () => {
  let component: PersonalListarPage;
  let fixture: ComponentFixture<PersonalListarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonalListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
