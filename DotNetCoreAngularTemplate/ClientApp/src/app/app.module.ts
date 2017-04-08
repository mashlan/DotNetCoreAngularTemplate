import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TopNavComponent } from "./topnav/topnav.component";

import { AppRoutingModule } from './app.routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        MarkdownModule.forRoot()
    ],
    declarations: [
        AppComponent,
        TopNavComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [
        AppComponent,
        TopNavComponent
    ]
})
export class AppModule { }
