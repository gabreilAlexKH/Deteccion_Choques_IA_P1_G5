import { TestBed } from '@angular/core/testing';

import { ModeloChoquesService } from './modelo-choques.service';

describe('ModeloChoquesService', () => {
  let service: ModeloChoquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeloChoquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
