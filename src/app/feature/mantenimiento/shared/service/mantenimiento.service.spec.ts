import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { MantenimientoService } from './mantenimiento.service';

describe('MantenimientoService', () => {
  let mantenimientoService: MantenimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MantenimientoService, HttpService]
    });
    mantenimientoService = TestBed.inject(MantenimientoService);
  });

  it('should be created', () => {
    expect(mantenimientoService).toBeTruthy();
  });
});
