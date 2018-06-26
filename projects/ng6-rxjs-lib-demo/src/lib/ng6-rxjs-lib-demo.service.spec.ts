import { TestBed, inject } from '@angular/core/testing';

import { Ng6RxjsLibDemoService } from './ng6-rxjs-lib-demo.service';

describe('Ng6RxjsLibDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng6RxjsLibDemoService]
    });
  });

  it('should be created', inject([Ng6RxjsLibDemoService], (service: Ng6RxjsLibDemoService) => {
    expect(service).toBeTruthy();
  }));
});
