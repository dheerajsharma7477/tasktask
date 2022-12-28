import { TestBed } from '@angular/core/testing';

import { MasterObjectService } from './master-object.service';

describe('MasterObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterObjectService = TestBed.get(MasterObjectService);
    expect(service).toBeTruthy();
  });
});
