import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mantenimiento } from '../../shared/model/mantenimiento.model';
import { MantenimientoService } from '../../shared/service/mantenimiento.service';

const LONGITUD_MINIMA_PLACA = 5;
const LONGITUD_MAXIMA_PLACA = 6;
const PATRON_PLACA = '^[a-zA-Z0-9]+$';
const CILINDRAJE_MINIMO = 50;
const PATRON_CILINDRAJE = '^[0-9]+$';
const PATRON_FECHA = 'yyyy-MM-dd HH:mm:ss';
@Component({
  selector: 'app-crear-mantenimiento',
  templateUrl: './crear-mantenimiento.component.html',
  styleUrls: ['./crear-mantenimiento.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrearMantenimientoComponent implements OnInit {
  titulo = 'Crear nuevo mantenimiento';
  fechaActual = new Date();
  // Declaracion de formulario
  datosMotocicletaForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  constructor(protected mantenimientoService: MantenimientoService, private formBuilder: FormBuilder, private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    this.crearFormularioMotocicleta();
  }
  crearFormularioMotocicleta() {
    this.datosMotocicletaForm = this.formBuilder.group({
      placa: [
        '',
        [
          Validators.required,
          Validators.minLength(LONGITUD_MINIMA_PLACA),
          Validators.maxLength(LONGITUD_MAXIMA_PLACA),
          Validators.pattern(
            PATRON_PLACA
          ),
        ],
      ],
      cilindraje: [
        '',
        [
          Validators.required,
          Validators.min(CILINDRAJE_MINIMO),
          Validators.pattern(PATRON_CILINDRAJE),
        ],
      ],
      fecha: ['', [
        Validators.required]],
    });
  }
  isValidFieldDatosMotocicletaForm(field: string) {
    return (
      (this.datosMotocicletaForm.get(field)?.dirty ||
        this.datosMotocicletaForm.get(field)?.touched) &&
      this.datosMotocicletaForm.get(field)?.invalid
    );
  }
  guardarMotocicletaMantenimiento() {
    const fechaTransformada = this.datePipe.transform(new Date(this.datosMotocicletaForm.get('fecha')?.value), PATRON_FECHA);
    const detalleMantenimiento: Mantenimiento = {
      id: null,
      placa: this.datosMotocicletaForm.get('placa')?.value,
      cilindraje: this.datosMotocicletaForm.get('cilindraje')?.value,
      fecha: fechaTransformada,
      tarifa: null,
      estado: null
    };
    this.mantenimientoService.guardar(detalleMantenimiento).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Mantenimiento creado!',
        text: `Moto con placa: ${detalleMantenimiento.placa}`,
      });
      this.resetearValoresForm(this.datosMotocicletaForm);
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error...',
        text: err.error.mensaje,
      });
    });
  }
  resetearValoresForm(formulario: FormGroup) {
    formulario.reset();
  }
  dirigirMenu() {
    this.router.navigate(['mantenimiento']);
  }
}
