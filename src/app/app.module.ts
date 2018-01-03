import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CribListingComponent } from './components/crib-listing/crib-listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CribCardComponent } from './components/crib-card/crib-card.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';
import { AddListingFormComponent } from './components/add-listing-form/add-listing-form.component';
import { SortByPipe } from './pipes/sort-by/sort-by.pipe';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    NavbarComponent,
    CribCardComponent,
    AddListingFormComponent,
    SortByPipe,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [CribsService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
