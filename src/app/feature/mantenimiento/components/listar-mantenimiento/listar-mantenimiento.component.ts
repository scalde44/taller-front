import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mantenimiento } from '../../shared/model/mantenimiento.model';
import { MantenimientoService } from '../../shared/service/mantenimiento.service';
@Component({
  selector: 'app-listar-mantenimiento',
  templateUrl: './listar-mantenimiento.component.html',
  styleUrls: ['./listar-mantenimiento.component.scss']
})
export class ListarMantenimientoComponent implements OnInit, AfterViewInit {
  titulo = 'Listado de mantenimientos';
  public listaMantenimientos: Mantenimiento[] = [];
  displayedColumns: string[] = ['id', 'placa', 'cilindraje', 'fechaEntrada', 'tarifa', 'estado', 'salida', 'eliminar'];
  dataSource = new MatTableDataSource<Mantenimiento>(this.listaMantenimientos);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(protected mantenimientoService: MantenimientoService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.listarMantenimientos();
  }
  listarMantenimientos() {
    this.mantenimientoService.listar().subscribe(data => {
      this.listaMantenimientos = data;
      this.dataSource.data = this.listaMantenimientos;
    }, err => {
      console.error(err);

    });
  }
  darSalidaMantenimiento(mantenimiento: Mantenimiento) {
    this.mantenimientoService.actualizar(mantenimiento).subscribe(() => {
      this.alertaExitosa('Mantenimiento dado de alta!', `Moto con placa: ${mantenimiento.placa}`);
      this.listarMantenimientos();
    }, err => {
      this.alertaError('Ocurrio un error...', err.error.mensaje);
    });
  }
  eliminarMantenimiento(idMantenimiento: number) {
    this.mantenimientoService.eliminar(idMantenimiento).subscribe(() => {
      this.alertaExitosa('Mantenimiento eliminado!', `id: ${idMantenimiento}`);
      this.listarMantenimientos();
    }, err => {
      this.alertaError('Ocurrio un error...', err.error.mensaje);
    });
  }
  dirigirMenu() {
    this.router.navigate(['mantenimiento']);
  }
  dirigirCrear() {
    this.router.navigate(['mantenimiento/crear']);
  }
  alertaExitosa(titulo: string, mensaje: string) {
    Swal.fire({
      icon: 'success',
      title: titulo,
      text: mensaje,
    });
  }
  alertaError(titulo: string, mensaje: string) {
    Swal.fire({
      icon: 'success',
      title: titulo,
      text: mensaje,
    });
  }
}