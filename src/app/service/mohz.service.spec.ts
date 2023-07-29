import { TestBed } from '@angular/core/testing';

import { MohzService } from './mohz.service';

describe('MohzService', () => {
  let service: MohzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MohzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
