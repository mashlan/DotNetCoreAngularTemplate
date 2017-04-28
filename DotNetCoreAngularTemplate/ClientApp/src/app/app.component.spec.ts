import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { } from "jasmine";
import { TopNavComponent } from "./topnav/topnav.component";
import { AppRoutingModule } from "./app.routing.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { BrowserModule } from "@angular/platform-browser";
import { MarkdownModule } from "angular2-markdown";

import { APP_BASE_HREF } from '@angular/common';


describe("App", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                TopNavComponent,
                HomeComponent,
                AboutComponent
            ],
            imports: [
                AppRoutingModule,
                BrowserModule,
                MarkdownModule.forRoot()
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        });
    });

    it("should work", () => {
        const fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, "should create AppComponent");
    });
});
