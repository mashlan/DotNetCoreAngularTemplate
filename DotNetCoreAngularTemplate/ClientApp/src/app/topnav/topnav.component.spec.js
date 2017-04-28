"use strict";
var testing_1 = require("@angular/core/testing");
var topnav_component_1 = require("./topnav.component");
describe("Top Nav", function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [topnav_component_1.TopNavComponent] });
    });
    it("should work", function () {
        var fixture = testing_1.TestBed.createComponent(topnav_component_1.TopNavComponent);
        expect(fixture.componentInstance instanceof topnav_component_1.TopNavComponent).toBe(true, "should create TopNavComponent");
    });
});
//# sourceMappingURL=topnav.component.spec.js.map