"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const angular2_markdown_1 = require("angular2-markdown");
const app_component_1 = require("./app.component");
const home_component_1 = require("./home/home.component");
const about_component_1 = require("./about/about.component");
const topnav_component_1 = require("./topnav/topnav.component");
const app_routing_module_1 = require("./app.routing.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            angular2_markdown_1.MarkdownModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            topnav_component_1.TopNavComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent
        ],
        bootstrap: [
            app_component_1.AppComponent,
            topnav_component_1.TopNavComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map