import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {ProjectsInternalComponent} from './projects-internal/projects-internal.component';

import {CommonModule} from '@angular/common';
// import {Route, RouterModule} from '@angular/router';
//
// const routes: Route[] = [
//   {
//     path        : '',
//     loadChildren: () => HomeComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    ProjectsInternalComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
