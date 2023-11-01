import {bootstrapApplication} from "@angular/platform-browser";
import {PreloadAllModules, provideRouter, withPreloading} from "@angular/router";
import {provideAnimations} from "@angular/platform-browser/animations";

import {AppComponent} from "./app/app.component";
import {APP_ROUTES} from "./app/app.routes";

import {importProvidersFrom, isDevMode} from "@angular/core";
import {NgxsModule} from "@ngxs/store";
import {BasketRepository} from "./app/state/basket.repository";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules)
    ),
    provideAnimations(),
    importProvidersFrom(
      NgxsModule.forRoot(
        [BasketRepository],
        {
          developmentMode: !isDevMode,
          selectorOptions: {
            suppressErrors: false,
            injectContainerState: false
          }
        }
      )
    )
  ]
});
