import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng6RxjsLibDemoService = /** @class */ (function () {
    function Ng6RxjsLibDemoService() {
    }
    Ng6RxjsLibDemoService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    Ng6RxjsLibDemoService.ctorParameters = function () { return []; };
    /** @nocollapse */ Ng6RxjsLibDemoService.ngInjectableDef = defineInjectable({ factory: function Ng6RxjsLibDemoService_Factory() { return new Ng6RxjsLibDemoService(); }, token: Ng6RxjsLibDemoService, providedIn: "root" });
    return Ng6RxjsLibDemoService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng6RxjsLibDemoComponent = /** @class */ (function () {
    function Ng6RxjsLibDemoComponent() {
    }
    /**
     * @return {?}
     */
    Ng6RxjsLibDemoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Ng6RxjsLibDemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xlw-ng6-rxjs-lib-demo',
                    template: "\n    <p>\n      ng6-rxjs-lib-demo works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    Ng6RxjsLibDemoComponent.ctorParameters = function () { return []; };
    return Ng6RxjsLibDemoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SimpleTableComponent = /** @class */ (function () {
    function SimpleTableComponent() {
    }
    /**
     * @return {?}
     */
    SimpleTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SimpleTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xlw-simple-table',
                    template: "<table id=\"customers\">\n  <tr>\n    <th>Company</th>\n    <th>Contact</th>\n    <th>Country</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Maria Anders</td>\n    <td>Germany</td>\n  </tr>\n  <tr>\n    <td>Berglunds snabbk\u00F6p</td>\n    <td>Christina Berglund</td>\n    <td>Sweden</td>\n  </tr>\n  <tr>\n    <td>Centro comercial Moctezuma</td>\n    <td>Francisco Chang</td>\n    <td>Mexico</td>\n  </tr>\n  <tr>\n    <td>Ernst Handel</td>\n    <td>Roland Mendel</td>\n    <td>Austria</td>\n  </tr>\n  <tr>\n    <td>Island Trading</td>\n    <td>Helen Bennett</td>\n    <td>UK</td>\n  </tr>\n  <tr>\n    <td>K\u00F6niglich Essen</td>\n    <td>Philip Cramer</td>\n    <td>Germany</td>\n  </tr>\n  <tr>\n    <td>Laughing Bacchus Winecellars</td>\n    <td>Yoshi Tannamuri</td>\n    <td>Canada</td>\n  </tr>\n  <tr>\n    <td>Magazzini Alimentari Riuniti</td>\n    <td>Giovanni Rovelli</td>\n    <td>Italy</td>\n  </tr>\n  <tr>\n    <td>North/South</td>\n    <td>Simon Crowther</td>\n    <td>UK</td>\n  </tr>\n  <tr>\n    <td>Paris sp\u00E9cialit\u00E9s</td>\n    <td>Marie Bertrand</td>\n    <td>France</td>\n  </tr>\n</table>",
                    styles: ["#customers{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}#customers td,#customers th{border:1px solid #ddd;padding:8px}#customers tr:nth-child(even){background-color:#f2f2f2}#customers tr:hover{background-color:#ddd}#customers th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4caf50;color:#fff}"]
                },] },
    ];
    /** @nocollapse */
    SimpleTableComponent.ctorParameters = function () { return []; };
    return SimpleTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng6RxjsLibDemoModule = /** @class */ (function () {
    function Ng6RxjsLibDemoModule() {
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
    return Ng6RxjsLibDemoModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { Ng6RxjsLibDemoService, Ng6RxjsLibDemoModule, Ng6RxjsLibDemoComponent, SimpleTableComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LXJ4anMtbGliLWRlbW8uanMubWFwIiwic291cmNlcyI6WyJuZzovL25nNi1yeGpzLWxpYi1kZW1vL2xpYi9uZzYtcnhqcy1saWItZGVtby5zZXJ2aWNlLnRzIiwibmc6Ly9uZzYtcnhqcy1saWItZGVtby9saWIvbmc2LXJ4anMtbGliLWRlbW8uY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtcnhqcy1saWItZGVtby9saWIvY29tcG9uZW50cy9zaW1wbGUtdGFibGUvc2ltcGxlLXRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LXJ4anMtbGliLWRlbW8vbGliL25nNi1yeGpzLWxpYi1kZW1vLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nNlJ4anNMaWJEZW1vU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hsdy1uZzYtcnhqcy1saWItZGVtbycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZzYtcnhqcy1saWItZGVtbyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmc2Unhqc0xpYkRlbW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGx3LXNpbXBsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XG4gIDx0cj5cbiAgICA8dGg+Q29tcGFueTwvdGg+XG4gICAgPHRoPkNvbnRhY3Q8L3RoPlxuICAgIDx0aD5Db3VudHJ5PC90aD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5BbGZyZWRzIEZ1dHRlcmtpc3RlPC90ZD5cbiAgICA8dGQ+TWFyaWEgQW5kZXJzPC90ZD5cbiAgICA8dGQ+R2VybWFueTwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+QmVyZ2x1bmRzIHNuYWJia8ODwrZwPC90ZD5cbiAgICA8dGQ+Q2hyaXN0aW5hIEJlcmdsdW5kPC90ZD5cbiAgICA8dGQ+U3dlZGVuPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5DZW50cm8gY29tZXJjaWFsIE1vY3RlenVtYTwvdGQ+XG4gICAgPHRkPkZyYW5jaXNjbyBDaGFuZzwvdGQ+XG4gICAgPHRkPk1leGljbzwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+RXJuc3QgSGFuZGVsPC90ZD5cbiAgICA8dGQ+Um9sYW5kIE1lbmRlbDwvdGQ+XG4gICAgPHRkPkF1c3RyaWE8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPklzbGFuZCBUcmFkaW5nPC90ZD5cbiAgICA8dGQ+SGVsZW4gQmVubmV0dDwvdGQ+XG4gICAgPHRkPlVLPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5Lw4PCtm5pZ2xpY2ggRXNzZW48L3RkPlxuICAgIDx0ZD5QaGlsaXAgQ3JhbWVyPC90ZD5cbiAgICA8dGQ+R2VybWFueTwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+TGF1Z2hpbmcgQmFjY2h1cyBXaW5lY2VsbGFyczwvdGQ+XG4gICAgPHRkPllvc2hpIFRhbm5hbXVyaTwvdGQ+XG4gICAgPHRkPkNhbmFkYTwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+TWFnYXp6aW5pIEFsaW1lbnRhcmkgUml1bml0aTwvdGQ+XG4gICAgPHRkPkdpb3Zhbm5pIFJvdmVsbGk8L3RkPlxuICAgIDx0ZD5JdGFseTwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+Tm9ydGgvU291dGg8L3RkPlxuICAgIDx0ZD5TaW1vbiBDcm93dGhlcjwvdGQ+XG4gICAgPHRkPlVLPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5QYXJpcyBzcMODwqljaWFsaXTDg8KpczwvdGQ+XG4gICAgPHRkPk1hcmllIEJlcnRyYW5kPC90ZD5cbiAgICA8dGQ+RnJhbmNlPC90ZD5cbiAgPC90cj5cbjwvdGFibGU+YCxcbiAgc3R5bGVzOiBbYCNjdXN0b21lcnN7Zm9udC1mYW1pbHk6XCJUcmVidWNoZXQgTVNcIixBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7d2lkdGg6MTAwJX0jY3VzdG9tZXJzIHRkLCNjdXN0b21lcnMgdGh7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO3BhZGRpbmc6OHB4fSNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0jY3VzdG9tZXJzIHRyOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2RkZH0jY3VzdG9tZXJzIHRoe3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweDt0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojNGNhZjUwO2NvbG9yOiNmZmZ9YF1cbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nNlJ4anNMaWJEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9uZzYtcnhqcy1saWItZGVtby5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2ltcGxlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2ltcGxlLXRhYmxlL3NpbXBsZS10YWJsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nNlJ4anNMaWJEZW1vQ29tcG9uZW50LFxuICAgIFNpbXBsZVRhYmxlQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZzZSeGpzTGliRGVtb0NvbXBvbmVudCxcbiAgICBTaW1wbGVUYWJsZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nNlJ4anNMaWJEZW1vTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztnQ0FKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsMENBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUseURBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7a0NBVkQ7Ozs7Ozs7QUNBQTtJQWlFRTtLQUFpQjs7OztJQUVqQix1Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBbEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsd25DQXdESDtvQkFDUCxNQUFNLEVBQUUsQ0FBQywrV0FBNlcsQ0FBQztpQkFDeFg7Ozs7K0JBOUREOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRTt3QkFDWix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3FCQUNyQjtpQkFDRjs7K0JBZkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==