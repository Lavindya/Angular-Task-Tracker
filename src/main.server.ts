import { bootstrapApplication } from '@angular/platform-server';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || [])
  ]
});

export default bootstrap;