import { TestBed } from '@angular/core/testing';

import { CallMryouService } from './call-mryou.service';

describe('CallMryouService', () => {
  let service: CallMryouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallMryouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
