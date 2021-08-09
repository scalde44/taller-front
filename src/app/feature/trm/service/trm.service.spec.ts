import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { TrmService } from './trm.service';

describe('TrmService', () => {
  let trmService: TrmService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrmService, HttpService]
    });
    trmService = TestBed.inject(TrmService);
  });

  it('should be created', () => {
    expect(trmService).toBeTruthy();
  });
});
