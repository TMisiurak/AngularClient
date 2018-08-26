import { TestBed, inject } from '@angular/core/testing';

import { EmployeeHttpService } from './employee-http.service';

describe('EmployeeHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeHttpService]
    });
  });

  it('should be created', inject([EmployeeHttpService], (service: EmployeeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
