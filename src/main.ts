import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { SecdoNgModule } from './app/secdo-ng.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SecdoNgModule);
