import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RemoteComponent } from './app/remote-app.component';

bootstrapApplication(RemoteComponent, appConfig)
  .catch((err) => console.error(err));
