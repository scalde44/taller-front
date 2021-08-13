import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Mantenimiento } from '../../shared/model/mantenimiento.model';
import { MantenimientoService } from '../../shared/service/mantenimiento.service';
import { ActualizarMantenimientoComponent } from './actualizar-mantenimiento.component';


describe('ActualizarMantenimientoComponent', () => {
  let component: ActualizarMantenimientoComponent;
  let fixture: ComponentFixture<ActualizarMantenimientoComponent>;
  let mantenimientoService: MantenimientoService;
  const detalleMantenimiento = new Mantenimiento(1, 'ABC012', 250, '2021-08-10 12:00:00', 100000, 'A');
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarMantenimientoComponent],
      imports: [
        CommonModule,
        HttpClientModule
      ],
      providers: [MantenimientoService, HttpService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarMantenimientoComponent);
    component = fixture.componentInstance;
    mantenimientoService = TestBed.inject(MantenimientoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Objeto mantenimiento debe estar indefinido', () => {
    expect(component.mantenimiento).toBeUndefined();
  });

  it('Crear objeto mantenimiento y comprobar que este definido', () => {
    component.mantenimiento = detalleMantenimiento;
    expect(component.mantenimiento).toBeDefined();
  });

  it('Actualizando mantenimiento y comprobando que emita evento', () => {
    component.mantenimiento = detalleMantenimiento;
    const spy = spyOn(mantenimientoService, 'actualizar').and.returnValue(
      of(true)
    );
    spyOn(component.mantenimientoActualizado, 'emit');

    component.darSalidaMantenimiento();

    expect(spy).toHaveBeenCalled();
    expect(component.mantenimientoActualizado.emit).toHaveBeenCalledWith({ accion: true, mensaje: component.mantenimiento.placa });
  });
});
