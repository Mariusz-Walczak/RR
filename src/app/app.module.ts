import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecapitulatioResumeModule } from './recapitulatio-resume/recapitulatio-resume.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RecapitulatioResumeModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
