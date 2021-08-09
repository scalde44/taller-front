import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Mantenimiento } from '../../shared/model/mantenimiento.model';
import { MantenimientoService } from '../../shared/service/mantenimiento.service';
import { ListarMantenimientoHoyComponent } from './listar-mantenimiento-hoy.component';


describe('ListarMantenimientoHoyComponent', () => {
  let component: ListarMantenimientoHoyComponent;
  let fixture: ComponentFixture<ListarMantenimientoHoyComponent>;
  let mantenimientoService: MantenimientoService;
  const listadoMantenimientos: Mantenimiento[] = [
    new Mantenimiento(1, 'ABC000', 250, '2021-08-05 12:00:00', 100000, 'A'),
    new Mantenimiento(2, 'ABC001', 100, '2021-08-05 12:00:00', 80000, 'A'),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarMantenimientoHoyComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        AppRoutingModule
      ],
      providers: [MantenimientoService, HttpService, DatePipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMantenimientoHoyComponent);
    component = fixture.componentInstance;
    mantenimientoService = TestBed.inject(MantenimientoService);
    spyOn(mantenimientoService, 'listarActivosPorFecha').and.returnValue(
      of(listadoMantenimientos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Comprobar que el titulo sea 'Listado de mantenimientos activos hoy'`, () => {
    expect(component.titulo).toEqual('Listado de mantenimientos activos hoy');
  });

  it('Comprobar tamano lista de mantenimientos y que esten activos', () => {
    component.listarMantenimientosActivosHoy();
    expect(mantenimientoService.listarActivosPorFecha).toHaveBeenCalled();
    expect(2).toBe(component.listaMantenimientosHoy.length);
    expect('A').toBe(component.listaMantenimientosHoy[0].estado);
    expect('A').toBe(component.listaMantenimientosHoy[1].estado);
  });
});
