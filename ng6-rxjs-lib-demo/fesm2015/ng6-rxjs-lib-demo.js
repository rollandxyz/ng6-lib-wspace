import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Ng6RxjsLibDemoService {
    constructor() { }
}
Ng6RxjsLibDemoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
Ng6RxjsLibDemoService.ctorParameters = () => [];
/** @nocollapse */ Ng6RxjsLibDemoService.ngInjectableDef = defineInjectable({ factory: function Ng6RxjsLibDemoService_Factory() { return new Ng6RxjsLibDemoService(); }, token: Ng6RxjsLibDemoService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Ng6RxjsLibDemoComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
Ng6RxjsLibDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'xlw-ng6-rxjs-lib-demo',
                template: `
    <p>
      ng6-rxjs-lib-demo works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
Ng6RxjsLibDemoComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SimpleTableComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SimpleTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'xlw-simple-table',
                template: `<table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
  </tr>
</table>`,
                styles: [`#customers{font-family:"Trebuchet MS",Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}#customers td,#customers th{border:1px solid #ddd;padding:8px}#customers tr:nth-child(even){background-color:#f2f2f2}#customers tr:hover{background-color:#ddd}#customers th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4caf50;color:#fff}`]
            },] },
];
/** @nocollapse */
SimpleTableComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Ng6RxjsLibDemoModule {
}
Ng6RxjsLibDemoModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [
                    Ng6RxjsLibDemoComponent,
                    SimpleTableComponent
                ],
                exports: [
                    Ng6RxjsLibDemoComponent,
                    SimpleTableComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { Ng6RxjsLibDemoService, Ng6RxjsLibDemoModule, Ng6RxjsLibDemoComponent, SimpleTableComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LXJ4anMtbGliLWRlbW8uanMubWFwIiwic291cmNlcyI6WyJuZzovL25nNi1yeGpzLWxpYi1kZW1vL2xpYi9uZzYtcnhqcy1saWItZGVtby5zZXJ2aWNlLnRzIiwibmc6Ly9uZzYtcnhqcy1saWItZGVtby9saWIvbmc2LXJ4anMtbGliLWRlbW8uY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtcnhqcy1saWItZGVtby9saWIvY29tcG9uZW50cy9zaW1wbGUtdGFibGUvc2ltcGxlLXRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LXJ4anMtbGliLWRlbW8vbGliL25nNi1yeGpzLWxpYi1kZW1vLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nNlJ4anNMaWJEZW1vU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hsdy1uZzYtcnhqcy1saWItZGVtbycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZzYtcnhqcy1saWItZGVtbyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmc2Unhqc0xpYkRlbW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGx3LXNpbXBsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XG4gIDx0cj5cbiAgICA8dGg+Q29tcGFueTwvdGg+XG4gICAgPHRoPkNvbnRhY3Q8L3RoPlxuICAgIDx0aD5Db3VudHJ5PC90aD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5BbGZyZWRzIEZ1dHRlcmtpc3RlPC90ZD5cbiAgICA8dGQ+TWFyaWEgQW5kZXJzPC90ZD5cbiAgICA8dGQ+R2VybWFueTwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+QmVyZ2x1bmRzIHNuYWJia8ODwrZwPC90ZD5cbiAgICA8dGQ+Q2hyaXN0aW5hIEJlcmdsdW5kPC90ZD5cbiAgICA8dGQ+U3dlZGVuPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5DZW50cm8gY29tZXJjaWFsIE1vY3RlenVtYTwvdGQ+XG4gICAgPHRkPkZyYW5jaXNjbyBDaGFuZzwvdGQ+XG4gICAgPHRkPk1leGljbzwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+RXJuc3QgSGFuZGVsPC90ZD5cbiAgICA8dGQ+Um9sYW5kIE1lbmRlbDwvdGQ+XG4gICAgPHRkPkF1c3RyaWE8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPklzbGFuZCBUcmFkaW5nPC90ZD5cbiAgICA8dGQ+SGVsZW4gQmVubmV0dDwvdGQ+XG4gICAgPHRkPlVLPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5Lw4PCtm5pZ2xpY2ggRXNzZW48L3RkPlxuICAgIDx0ZD5QaGlsaXAgQ3JhbWVyPC90ZD5cbiAgICA8dGQ+R2VybWFueTwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+TGF1Z2hpbmcgQmFjY2h1cyBXaW5lY2VsbGFyczwvdGQ+XG4gICAgPHRkPllvc2hpIFRhbm5hbXVyaTwvdGQ+XG4gICAgPHRkPkNhbmFkYTwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+TWFnYXp6aW5pIEFsaW1lbnRhcmkgUml1bml0aTwvdGQ+XG4gICAgPHRkPkdpb3Zhbm5pIFJvdmVsbGk8L3RkPlxuICAgIDx0ZD5JdGFseTwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+Tm9ydGgvU291dGg8L3RkPlxuICAgIDx0ZD5TaW1vbiBDcm93dGhlcjwvdGQ+XG4gICAgPHRkPlVLPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5QYXJpcyBzcMODwqljaWFsaXTDg8KpczwvdGQ+XG4gICAgPHRkPk1hcmllIEJlcnRyYW5kPC90ZD5cbiAgICA8dGQ+RnJhbmNlPC90ZD5cbiAgPC90cj5cbjwvdGFibGU+YCxcbiAgc3R5bGVzOiBbYCNjdXN0b21lcnN7Zm9udC1mYW1pbHk6XCJUcmVidWNoZXQgTVNcIixBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7d2lkdGg6MTAwJX0jY3VzdG9tZXJzIHRkLCNjdXN0b21lcnMgdGh7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO3BhZGRpbmc6OHB4fSNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0jY3VzdG9tZXJzIHRyOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2RkZH0jY3VzdG9tZXJzIHRoe3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweDt0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojNGNhZjUwO2NvbG9yOiNmZmZ9YF1cbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nNlJ4anNMaWJEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9uZzYtcnhqcy1saWItZGVtby5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2ltcGxlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2ltcGxlLXRhYmxlL3NpbXBsZS10YWJsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nNlJ4anNMaWJEZW1vQ29tcG9uZW50LFxuICAgIFNpbXBsZVRhYmxlQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZzZSeGpzTGliRGVtb0NvbXBvbmVudCxcbiAgICBTaW1wbGVUYWJsZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nNlJ4anNMaWJEZW1vTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7YUFDWDs7Ozs7Ozs7O0FDVkQ7SUFpRUUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBbEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBd0RIO2dCQUNQLE1BQU0sRUFBRSxDQUFDLDZXQUE2VyxDQUFDO2FBQ3hYOzs7Ozs7Ozs7QUM5REQ7OztZQUlDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFDUjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2QixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtpQkFDckI7YUFDRjs7Ozs7Ozs7Ozs7Ozs7OyJ9