import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RespuestaMantenimiento } from '@mantenimiento/shared/model/respuesta-mantenimiento.model';
import { Mantenimiento } from '../../shared/model/mantenimiento.model';
import { MantenimientoService } from '../../shared/service/mantenimiento.service';

@Component({
  selector: 'app-eliminar-mantenimiento',
  templateUrl: './eliminar-mantenimiento.component.html',
  styleUrls: ['./eliminar-mantenimiento.component.scss']
})
export class EliminarMantenimientoComponent implements OnInit {
  @Input() mantenimiento: Mantenimiento;
  @Output() mantenimientoEliminado: EventEmitter<RespuestaMantenimiento> = new EventEmitter();
  constructor(protected mantenimientoService: MantenimientoService) { }

  ngOnInit(): void {
  }


  eliminarMantenimiento() {
    this.mantenimientoService.eliminar(this.mantenimiento.id).subscribe(() => {
      this.mantenimientoEliminado.emit({ accion: true, mensaje: this.mantenimiento.id.toString() });
    }, (err) => {
      this.mantenimientoEliminado.emit({ accion: false, mensaje: err.error.mensaje });
    });
  }
}
