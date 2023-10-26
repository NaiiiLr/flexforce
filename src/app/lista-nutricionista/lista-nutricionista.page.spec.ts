import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaNutricionistaPage } from './lista-nutricionista.page';

describe('ListaNutricionistaPage', () => {
  let component: ListaNutricionistaPage;
  let fixture: ComponentFixture<ListaNutricionistaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaNutricionistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
