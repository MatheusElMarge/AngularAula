import { TestBed } from '@angular/core/testing';

import { CarrosServiceService } from './carros-service.service';

describe('CarrosServiceService', () => {
  let service: CarrosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
