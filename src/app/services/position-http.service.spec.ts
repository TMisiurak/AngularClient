import { TestBed, inject } from '@angular/core/testing';

import { PositionHttpService } from './position-http.service';

describe('PositionHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositionHttpService]
    });
  });

  it('should be created', inject([PositionHttpService], (service: PositionHttpService) => {
    expect(service).toBeTruthy();
  }));
});
