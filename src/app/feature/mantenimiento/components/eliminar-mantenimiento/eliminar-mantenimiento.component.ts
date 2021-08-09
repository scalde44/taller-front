import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mantenimiento } from '../../shared/model/mantenimiento.model';
import { MantenimientoService } from '../../shared/service/mantenimiento.service';

@Component({
  selector: 'app-eliminar-mantenimiento',
  templateUrl: './eliminar-mantenimiento.component.html',
  styleUrls: ['./eliminar-mantenimiento.component.scss']
})
export class EliminarMantenimientoComponent implements OnInit {
  @Input() mantenimiento: Mantenimiento;
  @Output() mantenimientoEliminado: EventEmitter<any> = new EventEmitter();
  constructor(protected mantenimientoService: MantenimientoService) { }

  ngOnInit(): void {
  }


  eliminarMantenimiento() {
    this.mantenimientoService.eliminar(this.mantenimiento.id).subscribe(() => {
      this.mantenimientoEliminado.emit({ eliminado: true, mensaje: this.mantenimiento.id });
    }, (err) => {
      this.mantenimientoEliminado.emit({ eliminado: false, mensaje: err.error.mensaje });
    });
  }
}
