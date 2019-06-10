import { TestBed } from '@angular/core/testing';

import { ListClientsService } from './list-clients.service';

describe('ListClientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListClientsService = TestBed.get(ListClientsService);
    expect(service).toBeTruthy();
  });
});
