import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMantenimientoComponent } from './listar-mantenimiento.component';

describe('ListarMantenimientoComponent', () => {
  let component: ListarMantenimientoComponent;
  let fixture: ComponentFixture<ListarMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
