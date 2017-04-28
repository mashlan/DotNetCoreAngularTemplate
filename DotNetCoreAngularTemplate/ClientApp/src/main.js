/// <reference types="node" />
"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./app/app.module");
if (process && process.env.ENV === "production") {
    core_1.enableProdMode();
}
if (module.hot) {
    module.hot.accept();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map