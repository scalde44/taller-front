import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Trm } from '../model/trm.model';

const TRM_URL = environment.urlTrm;
const TRM_TOKEN = environment.tokenTrm;
@Injectable()
export class TrmService {

  constructor(protected http: HttpService) { }

  public consultar(fecha: string) {
    const query = `SELECT * WHERE vigenciadesde='${fecha}' OR '${fecha}' between vigenciadesde and vigenciahasta`;
    const httpParams = new HttpParams()
      .set('$query', query);
    return this.http.doGetParameters<Trm[]>(`${TRM_URL}`, httpParams, this.http.optsTrm(`${TRM_TOKEN}`));
  }
}
