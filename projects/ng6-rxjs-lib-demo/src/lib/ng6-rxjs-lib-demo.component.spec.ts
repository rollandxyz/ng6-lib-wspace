import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6RxjsLibDemoComponent } from './ng6-rxjs-lib-demo.component';

describe('Ng6RxjsLibDemoComponent', () => {
  let component: Ng6RxjsLibDemoComponent;
  let fixture: ComponentFixture<Ng6RxjsLibDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6RxjsLibDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6RxjsLibDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
