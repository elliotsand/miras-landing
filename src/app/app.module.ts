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
import {ServiceInternalComponent} from './service-internal/service-internal.component';
import {RouterModule} from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    ServiceInternalComponent,
    ProjectsInternalComponent,
    CarouselHolderComponent,

  ],
  imports: [
    CarouselModule,
    BrowserAnimationsModule,
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
        component: ServiceInternalComponent
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
