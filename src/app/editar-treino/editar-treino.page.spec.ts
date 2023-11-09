import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarTreinoPage } from './editar-treino.page';

describe('EditarTreinoPage', () => {
  let component: EditarTreinoPage;
  let fixture: ComponentFixture<EditarTreinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
