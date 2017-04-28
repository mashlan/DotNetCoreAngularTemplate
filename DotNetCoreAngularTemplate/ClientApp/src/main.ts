/// <reference types="node" />

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module";


if (process && process.env.ENV === "production") {
    enableProdMode();
}

// Enables Hot Module Replacement.
declare var module: any;
if (module.hot) {
    module.hot.accept();
}


platformBrowserDynamic().bootstrapModule(AppModule);
