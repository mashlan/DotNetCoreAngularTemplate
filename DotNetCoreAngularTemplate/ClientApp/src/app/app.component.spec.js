"use strict";
const testing_1 = require("@angular/core/testing");
const app_component_1 = require("./app.component");
describe('App', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({ declarations: [app_component_1.AppComponent] });
    });
    it('should work', () => {
        let fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
    });
});
//# sourceMappingURL=app.component.spec.js.map