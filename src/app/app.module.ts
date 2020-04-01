import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { MainviewComponent } from './modules/mainview/mainview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';

import { HttpClientModule } from '@angular/common/http';

import { MatCarouselModule } from '@ngmodule/material-carousel';

// for local data
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryDataListService } from './in-memory-datalist.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataListService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    MaterialModule,
    MatCarouselModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
