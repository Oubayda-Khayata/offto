import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have #BASE_URL property', () => {
    expect(ApiService.BASE_URL).toBeTruthy();
  });

  it('should have #getAPIHeaders function', () => {
    expect(service.getAPIHeaders).toBeTruthy();
  });

  it('should have #getAPIHeadersWithAuthorization function', () => {
    expect(service.getAPIHeadersWithAuthorization).toBeTruthy();
  });
});
