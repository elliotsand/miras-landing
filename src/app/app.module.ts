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
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {CarouselHolderComponent} from './carousel-holder/carousel-holder.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceIngenieriaComponent} from './service-ingeneria/service-ingenieria.component';
import {ServiceSupervisionComponent} from './service-supervision/service-supervision.component';
import {ServiceBimComponent} from './service-bim/service-bim.component';
import {ServiceDireccionComponent} from './service-direccion/service-direccion.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    ProjectsInternalComponent,
    CarouselHolderComponent,
    ServiceIngenieriaComponent,
    ServiceDireccionComponent,
    ServiceSupervisionComponent,
    ServiceBimComponent,
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
        path: 'ingeneria',
        component: ServiceIngenieriaComponent
      },
      {
        path: 'bim',
        component: ServiceBimComponent
      },
      {
        path: 'supervision',
        component: ServiceSupervisionComponent
      },
      {
        path: 'direccion',
        component: ServiceDireccionComponent
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

      {path: '**', pathMatch: 'full', redirectTo: 'home'}

    ]),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
