import { TestBed } from "@angular/core/testing";
import { TopNavComponent } from "./topnav.component";
import {} from "jasmine";

describe("Top Nav", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [TopNavComponent] });
    });
    it("should work", () => {
        const fixture = TestBed.createComponent(TopNavComponent);
        expect(fixture.componentInstance instanceof TopNavComponent).toBe(true, "should create TopNavComponent");
    });
});
