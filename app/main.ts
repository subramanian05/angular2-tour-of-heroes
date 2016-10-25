/**
 * Created by rajeshsubramanian on 10/20/16.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app.module";
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
