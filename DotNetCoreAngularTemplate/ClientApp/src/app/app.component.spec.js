"use strict";
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
var topnav_component_1 = require("./topnav/topnav.component");
var app_routing_module_1 = require("./app.routing.module");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var platform_browser_1 = require("@angular/platform-browser");
var angular2_markdown_1 = require("angular2-markdown");
var common_1 = require("@angular/common");
describe("App", function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent,
                topnav_component_1.TopNavComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                angular2_markdown_1.MarkdownModule.forRoot()
            ],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ]
        });
    });
    it("should work", function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, "should create AppComponent");
    });
});
//# sourceMappingURL=app.component.spec.js.map