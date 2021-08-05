import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Trm } from './model/trm.model';
import { TrmService } from './service/trm.service';

@Component({
  selector: 'app-trm',
  templateUrl: './trm.component.html',
  styleUrls: ['./trm.component.scss']
})
export class TrmComponent implements OnInit {
  public trmActual: Observable<Trm[]>;
  constructor(protected trmService: TrmService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    this.obtenerTrmActualColombia();
  }

  obtenerTrmActualColombia() {
    const fechaTransformada = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.trmActual = this.trmService.consultar(fechaTransformada);
  }

  dirigirMantenimiento() {
    this.router.navigate(['mantenimiento']);
  }
}
