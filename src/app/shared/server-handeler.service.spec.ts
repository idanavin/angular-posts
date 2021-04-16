import { TestBed } from '@angular/core/testing';

import { ServerHandelerService } from './server-handeler.service';

describe('ServerHandelerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerHandelerService = TestBed.get(ServerHandelerService);
    expect(service).toBeTruthy();
  });
});
