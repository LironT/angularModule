import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { SecdoNgModule } from './app/secdo-ng.module';

import { LicenseManager } from 'ag-grid-enterprise/main';

if (environment.production) {
  enableProdMode();
}

LicenseManager.setLicenseKey('Secdo_Secdo_1Devs_7_November_2017__MTUxMDAxMjgwMDAwMA==85d0aef973e38f930ffbd936fe2e977b');

platformBrowserDynamic().bootstrapModule(SecdoNgModule);