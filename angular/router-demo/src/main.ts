import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// load the application based on the configuration in AppConfig
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
