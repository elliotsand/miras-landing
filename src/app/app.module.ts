import {BrowserModule} from '@angular/platform-browser';

import {APP_BASE_HREF} from '@angular/common';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ProjectsInternalComponent} from './projects-internal/projects-internal.component';
import {serviceInternalComponent} from './service-internal/service-internal.component';
import {RouterModule} from '@angular/router';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    serviceInternalComponent,
    ProjectsInternalComponent
  ],
  imports: [
    IvyCarouselModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'services',
        component: ServiceComponent
      },
      {
        path: 'service',
        component: serviceInternalComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'project',
        component: ProjectsInternalComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },

      { path: '**', pathMatch: 'full' , redirectTo : 'home' }

    ]),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
