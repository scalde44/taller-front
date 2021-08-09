import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Mantenimiento } from '../../shared/model/mantenimiento.model';
import { MantenimientoService } from '../../shared/service/mantenimiento.service';
import { CrearMantenimientoComponent } from './crear-mantenimiento.component';

describe('CrearMantenimientoComponent', () => {
  let component: CrearMantenimientoComponent;
  let fixture: ComponentFixture<CrearMantenimientoComponent>;
  let mantenimientoService: MantenimientoService;
  const detalleMantenimiento = new Mantenimiento(null, 'ABC012', 250, '2021-08-10 12:00:00', null, null);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearMantenimientoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule],
      providers: [MantenimientoService, HttpService, DatePipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMantenimientoComponent);
    component = fixture.componentInstance;
    mantenimientoService = TestBed.inject(MantenimientoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Comprobar que el titulo sea 'Crear nuevo mantenimiento'`, () => {
    expect(component.titulo).toEqual('Crear nuevo mantenimiento');
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.datosMotocicletaForm.valid).toBeFalsy();
  });

  it('Comprobar formulario y reset formulario', () => {
    component.datosMotocicletaForm.controls.placa.setValue(detalleMantenimiento.placa);
    component.datosMotocicletaForm.controls.cilindraje.setValue(detalleMantenimiento.cilindraje);
    component.datosMotocicletaForm.controls.fecha.setValue(detalleMantenimiento.fecha);
    expect(component.datosMotocicletaForm.valid).toBeTruthy();
    component.resetearValoresForm(component.datosMotocicletaForm);
    expect(component.datosMotocicletaForm.valid).toBeFalsy();
  });

  it('Registrar mantenimiento y llamar al servicio', () => {
    component.datosMotocicletaForm.controls.placa.setValue(detalleMantenimiento.placa);
    component.datosMotocicletaForm.controls.cilindraje.setValue(detalleMantenimiento.cilindraje);
    component.datosMotocicletaForm.controls.fecha.setValue(detalleMantenimiento.fecha);
    expect(component.datosMotocicletaForm.valid).toBeTruthy();
    const spy = spyOn(mantenimientoService, 'guardar').and.returnValue(
      of(true)
    );
    component.guardarMotocicletaMantenimiento();
    expect(spy).toHaveBeenCalled();
  });
});
