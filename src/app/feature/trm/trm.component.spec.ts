import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Trm } from './model/trm.model';
import { TrmService } from './service/trm.service';
import { TrmComponent } from './trm.component';


describe('TrmComponent', () => {
  let component: TrmComponent;
  let fixture: ComponentFixture<TrmComponent>;
  let trmService: TrmService;
  const listaTrm: Trm[] = [new Trm('3800', '2021-08-11', '2021-08-11')];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TrmComponent
      ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [TrmService, HttpService, DatePipe],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrmComponent);
    component = fixture.componentInstance;
    trmService = TestBed.inject(TrmService);
    spyOn(trmService, 'consultar').and.returnValue(
      of(listaTrm)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Comprobar trm actual', () => {
    component.trmActual.subscribe(resultado => {
      expect(1).toBe(resultado.length);
      expect('3800').toBe(resultado[0].valor);
    });
  });
});
