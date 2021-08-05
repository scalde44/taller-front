import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMantenimientoHoyComponent } from './listar-mantenimiento-hoy.component';

describe('ListarMantenimientoHoyComponent', () => {
  let component: ListarMantenimientoHoyComponent;
  let fixture: ComponentFixture<ListarMantenimientoHoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMantenimientoHoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMantenimientoHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
