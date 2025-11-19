import { TestBed } from '@angular/core/testing';

import { ApiServices } from './api-services';
import { provideHttpClient } from '@angular/common/http';

describe('ApiServices', () => {
  let service: ApiServices;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(ApiServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
