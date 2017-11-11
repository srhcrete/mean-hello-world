System.register(["angular2/platform/browser", "./Components/home.components"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, home_components_1;
    return {
        setters: [
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (home_components_1_1) {
                home_components_1 = home_components_1_1;
            }
        ],
        execute: function () {
            browser_1.bootstrap(home_components_1.HomeComponent);
        }
    };
});
