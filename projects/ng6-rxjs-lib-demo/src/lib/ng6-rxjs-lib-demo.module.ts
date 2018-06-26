import { NgModule } from '@angular/core';
import { Ng6RxjsLibDemoComponent } from './ng6-rxjs-lib-demo.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';

@NgModule({
  imports: [
  ],
  declarations: [
    Ng6RxjsLibDemoComponent,
    SimpleTableComponent
  ],
  exports: [
    Ng6RxjsLibDemoComponent,
    SimpleTableComponent
  ]
})
export class Ng6RxjsLibDemoModule { }
