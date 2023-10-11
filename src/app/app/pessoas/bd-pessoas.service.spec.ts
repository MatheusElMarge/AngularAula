import { TestBed } from '@angular/core/testing';

import { BdPessoasService } from './bd-pessoas.service';

describe('BdPessoasService', () => {
  let service: BdPessoasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdPessoasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
