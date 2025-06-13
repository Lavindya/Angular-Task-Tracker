import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

export default mergeApplicationConfig(appConfig, {
  providers: [
    provideServerRendering()
  ]
});