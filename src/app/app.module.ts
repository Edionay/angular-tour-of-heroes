import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TourComponent } from './tour/tour.component';
import { FormsModule } from '@angular/forms';
import { TourDetailComponent } from './tour-detail/tour-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    TourDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
