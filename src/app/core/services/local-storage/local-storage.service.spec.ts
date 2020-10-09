import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have #getItem function', () => {
    expect(service.getItem).toBeTruthy();
  });

  it('should have #setItem function', () => {
    expect(service.setItem).toBeTruthy();
  });
});
