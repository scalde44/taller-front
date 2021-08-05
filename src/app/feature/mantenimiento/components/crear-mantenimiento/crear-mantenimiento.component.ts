import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mantenimiento } from '../../shared/model/mantenimiento.model';
import { MantenimientoService } from '../../shared/service/mantenimiento.service';
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
          Validators.minLength(5),
          Validators.maxLength(6),
          Validators.pattern(
            '^[a-zA-Z0-9]+$'
          ),
        ],
      ],
      cilindraje: [
        '',
        [
          Validators.required,
          Validators.min(50),
          Validators.pattern('^[0-9]+$'),
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
    const fechaTransformada = this.datePipe.transform(new Date(this.datosMotocicletaForm.get('fecha')?.value), 'yyyy-MM-dd HH:mm:ss');
    const detalleMantenimiento: Mantenimiento = {
      id: null as any,
      placa: this.datosMotocicletaForm.get('placa')?.value,
      cilindraje: this.datosMotocicletaForm.get('cilindraje')?.value,
      fecha: fechaTransformada,
      tarifa: null as any,
      estado: null as any
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
