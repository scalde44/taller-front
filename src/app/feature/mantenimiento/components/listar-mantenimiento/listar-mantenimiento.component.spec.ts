import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Mantenimiento } from '../../shared/model/mantenimiento.model';
import { MantenimientoService } from '../../shared/service/mantenimiento.service';
import { ListarMantenimientoComponent } from './listar-mantenimiento.component';


describe('ListarMantenimientoComponent', () => {
  let component: ListarMantenimientoComponent;
  let fixture: ComponentFixture<ListarMantenimientoComponent>;
  let mantenimientoService: MantenimientoService;
  const listadoMantenimientos: Mantenimiento[] = [
    new Mantenimiento(1, 'ABC000', 250, '2021-08-05 12:00:00', 100000, 'A'),
    new Mantenimiento(2, 'ABC001', 100, '2021-09-05 12:00:00', 80000, 'I'),
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarMantenimientoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [MantenimientoService, HttpService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMantenimientoComponent);
    component = fixture.componentInstance;
    mantenimientoService = TestBed.inject(MantenimientoService);
    spyOn(mantenimientoService, 'listar').and.returnValue(
      of(listadoMantenimientos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Comprobar que el titulo sea 'Listado de mantenimientos'`, () => {
    expect(component.titulo).toEqual('Listado de mantenimientos');
  });

  it('Comprobar tamano lista de mantenimientos', () => {
    component.listarMantenimientos();
    expect(mantenimientoService.listar).toHaveBeenCalled();
    expect(2).toBe(component.listaMantenimientos.length);
  });
});
