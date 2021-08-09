import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mantenimiento } from '../../shared/model/mantenimiento.model';
import { MantenimientoService } from '../../shared/service/mantenimiento.service';

@Component({
  selector: 'app-actualizar-mantenimiento',
  templateUrl: './actualizar-mantenimiento.component.html'
})
export class ActualizarMantenimientoComponent implements OnInit {
  @Input() mantenimiento: Mantenimiento;
  @Output() mantenimientoActualizado: EventEmitter<any> = new EventEmitter();
  constructor(protected mantenimientoService: MantenimientoService) { }

  ngOnInit(): void {
  }

  darSalidaMantenimiento() {
    this.mantenimientoService.actualizar(this.mantenimiento).subscribe(() => {
      this.mantenimientoActualizado.emit({ actualizado: true, mensaje: this.mantenimiento.placa });
    }, err => {
      this.mantenimientoActualizado.emit({ actualizado: false, mensaje: err.error.mensaje });
    });
  }
}
