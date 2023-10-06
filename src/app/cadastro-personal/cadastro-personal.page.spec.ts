import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroPersonalPage } from './cadastro-personal.page';

describe('CadastroPersonalPage', () => {
  let component: CadastroPersonalPage;
  let fixture: ComponentFixture<CadastroPersonalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
