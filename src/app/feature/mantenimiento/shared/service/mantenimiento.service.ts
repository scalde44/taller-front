import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Mantenimiento } from '../model/mantenimiento.model';

const API_URL = environment.endpoint + '/mantenimientos';
@Injectable()
export class MantenimientoService {

  constructor(protected http: HttpService) { }

  public listar() {
    return this.http.doGet<Mantenimiento[]>(`${API_URL}`, this.http.optsName('Listar Mantenimientos'));
  }
  public listarActivosPorFecha(fecha: string) {
    return this.http.doGet<Mantenimiento[]>(`${API_URL}/activos/${fecha}`, this.http.optsName('Listar mantenimientos activos por fecha'));
  }
  public guardar(mantenimiento: Mantenimiento) {
    return this.http.doPost<Mantenimiento, any>(`${API_URL}`, mantenimiento,
      this.http.optsName('Crear Mantenimiento'));
  }
  public actualizar(mantenimiento: Mantenimiento) {
    return this.http.doPut<Mantenimiento, any>(`${API_URL}/${mantenimiento.id}`, mantenimiento,
      this.http.optsName('Finalizar mantenimiento'));
  }
  public eliminar(idMantenimiento: number) {
    return this.http.doDelete<boolean>(`${API_URL}/${idMantenimiento}`,
      this.http.optsName('Eliminar Mantenimiento'));
  }
}
