import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HostComponent } from './app/host.component';

bootstrapApplication(HostComponent, appConfig)
  .catch((err) => console.error(err));
