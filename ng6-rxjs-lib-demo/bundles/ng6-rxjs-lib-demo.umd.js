(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng6-rxjs-lib-demo', ['exports', '@angular/core'], factory) :
    (factory((global['ng6-rxjs-lib-demo'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Ng6RxjsLibDemoService = (function () {
        function Ng6RxjsLibDemoService() {
        }
        Ng6RxjsLibDemoService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        Ng6RxjsLibDemoService.ctorParameters = function () { return []; };
        /** @nocollapse */ Ng6RxjsLibDemoService.ngInjectableDef = i0.defineInjectable({ factory: function Ng6RxjsLibDemoService_Factory() { return new Ng6RxjsLibDemoService(); }, token: Ng6RxjsLibDemoService, providedIn: "root" });
        return Ng6RxjsLibDemoService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Ng6RxjsLibDemoComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var SimpleTableComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var Ng6RxjsLibDemoModule = (function () {
        function Ng6RxjsLibDemoModule() {
        }
        Ng6RxjsLibDemoModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.Ng6RxjsLibDemoService = Ng6RxjsLibDemoService;
    exports.Ng6RxjsLibDemoModule = Ng6RxjsLibDemoModule;
    exports.Ng6RxjsLibDemoComponent = Ng6RxjsLibDemoComponent;
    exports.SimpleTableComponent = SimpleTableComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LXJ4anMtbGliLWRlbW8udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzYtcnhqcy1saWItZGVtby9saWIvbmc2LXJ4anMtbGliLWRlbW8uc2VydmljZS50cyIsIm5nOi8vbmc2LXJ4anMtbGliLWRlbW8vbGliL25nNi1yeGpzLWxpYi1kZW1vLmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LXJ4anMtbGliLWRlbW8vbGliL2NvbXBvbmVudHMvc2ltcGxlLXRhYmxlL3NpbXBsZS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL25nNi1yeGpzLWxpYi1kZW1vL2xpYi9uZzYtcnhqcy1saWItZGVtby5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZzZSeGpzTGliRGVtb1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4bHctbmc2LXJ4anMtbGliLWRlbW8nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmc2LXJ4anMtbGliLWRlbW8gd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nNlJ4anNMaWJEZW1vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hsdy1zaW1wbGUtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxuICA8dHI+XG4gICAgPHRoPkNvbXBhbnk8L3RoPlxuICAgIDx0aD5Db250YWN0PC90aD5cbiAgICA8dGg+Q291bnRyeTwvdGg+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+QWxmcmVkcyBGdXR0ZXJraXN0ZTwvdGQ+XG4gICAgPHRkPk1hcmlhIEFuZGVyczwvdGQ+XG4gICAgPHRkPkdlcm1hbnk8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPkJlcmdsdW5kcyBzbmFiYmvDg8K2cDwvdGQ+XG4gICAgPHRkPkNocmlzdGluYSBCZXJnbHVuZDwvdGQ+XG4gICAgPHRkPlN3ZWRlbjwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+Q2VudHJvIGNvbWVyY2lhbCBNb2N0ZXp1bWE8L3RkPlxuICAgIDx0ZD5GcmFuY2lzY28gQ2hhbmc8L3RkPlxuICAgIDx0ZD5NZXhpY288L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPkVybnN0IEhhbmRlbDwvdGQ+XG4gICAgPHRkPlJvbGFuZCBNZW5kZWw8L3RkPlxuICAgIDx0ZD5BdXN0cmlhPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5Jc2xhbmQgVHJhZGluZzwvdGQ+XG4gICAgPHRkPkhlbGVuIEJlbm5ldHQ8L3RkPlxuICAgIDx0ZD5VSzwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+S8ODwrZuaWdsaWNoIEVzc2VuPC90ZD5cbiAgICA8dGQ+UGhpbGlwIENyYW1lcjwvdGQ+XG4gICAgPHRkPkdlcm1hbnk8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPkxhdWdoaW5nIEJhY2NodXMgV2luZWNlbGxhcnM8L3RkPlxuICAgIDx0ZD5Zb3NoaSBUYW5uYW11cmk8L3RkPlxuICAgIDx0ZD5DYW5hZGE8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPk1hZ2F6emluaSBBbGltZW50YXJpIFJpdW5pdGk8L3RkPlxuICAgIDx0ZD5HaW92YW5uaSBSb3ZlbGxpPC90ZD5cbiAgICA8dGQ+SXRhbHk8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPk5vcnRoL1NvdXRoPC90ZD5cbiAgICA8dGQ+U2ltb24gQ3Jvd3RoZXI8L3RkPlxuICAgIDx0ZD5VSzwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+UGFyaXMgc3DDg8KpY2lhbGl0w4PCqXM8L3RkPlxuICAgIDx0ZD5NYXJpZSBCZXJ0cmFuZDwvdGQ+XG4gICAgPHRkPkZyYW5jZTwvdGQ+XG4gIDwvdHI+XG48L3RhYmxlPmAsXG4gIHN0eWxlczogW2AjY3VzdG9tZXJze2ZvbnQtZmFtaWx5OlwiVHJlYnVjaGV0IE1TXCIsQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO3dpZHRoOjEwMCV9I2N1c3RvbWVycyB0ZCwjY3VzdG9tZXJzIHRoe2JvcmRlcjoxcHggc29saWQgI2RkZDtwYWRkaW5nOjhweH0jY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9I2N1c3RvbWVycyB0cjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkZGR9I2N1c3RvbWVycyB0aHtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjEycHg7dGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQtY29sb3I6IzRjYWY1MDtjb2xvcjojZmZmfWBdXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzZSeGpzTGliRGVtb0NvbXBvbmVudCB9IGZyb20gJy4vbmc2LXJ4anMtbGliLWRlbW8uY29tcG9uZW50JztcbmltcG9ydCB7IFNpbXBsZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpbXBsZS10YWJsZS9zaW1wbGUtdGFibGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZzZSeGpzTGliRGVtb0NvbXBvbmVudCxcbiAgICBTaW1wbGVUYWJsZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmc2Unhqc0xpYkRlbW9Db21wb25lbnQsXG4gICAgU2ltcGxlVGFibGVDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZzZSeGpzTGliRGVtb01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O29DQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQiwwQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxRQUFRLEVBQUUseURBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7c0NBVkQ7Ozs7Ozs7QUNBQTtRQWlFRTtTQUFpQjs7OztRQUVqQix1Q0FBUTs7O1lBQVI7YUFDQzs7b0JBbEVGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLHduQ0F3REg7d0JBQ1AsTUFBTSxFQUFFLENBQUMsK1dBQTZXLENBQUM7cUJBQ3hYOzs7O21DQTlERDs7Ozs7OztBQ0FBOzs7O29CQUlDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFOzRCQUNaLHVCQUF1Qjs0QkFDdkIsb0JBQW9CO3lCQUNyQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsdUJBQXVCOzRCQUN2QixvQkFBb0I7eUJBQ3JCO3FCQUNGOzttQ0FmRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=