import { TestBed } from '@angular/core/testing';

import { IxAngularElementsService } from './ix-angular-elements.service';

describe('IxAngularElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IxAngularElementsService = TestBed.get(IxAngularElementsService);
    expect(service).toBeTruthy();
  });
});
