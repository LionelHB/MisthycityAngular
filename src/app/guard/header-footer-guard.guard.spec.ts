import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { headerFooterGuardGuard } from './header-footer-guard.guard';

describe('headerFooterGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => headerFooterGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
