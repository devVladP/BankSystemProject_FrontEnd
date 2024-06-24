import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authHttpInterceptorFn } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAuth0({
    domain: 'dev-cylgxg6fb2qbvl3d.us.auth0.com',
    clientId: 'nPAU0UrTiT7Naq3cxPXsFyj0L0xDMiJ0',
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: 'https://dev-cylgxg6fb2qbvl3d.us.auth0.com/api/v2/',
      scope: "openid profile email offline_access audience permissions issuer roles",
    },

    httpInterceptor: {
      allowedList: [
        {
          uri: 'https://dev-cylgxg6fb2qbvl3d.us.auth0.com/api/v2/*',
          tokenOptions: {
            authorizationParams: {
              audience: 'https://dev-cylgxg6fb2qbvl3d.us.auth0.com/api/v2/',
              scope: 'use:account'
            }
          }
        }
      ]
    }
  }),
  provideHttpClient(withInterceptors([authHttpInterceptorFn])),
],
};
