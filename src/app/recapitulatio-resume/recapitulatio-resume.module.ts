import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SectionComponent, HeaderComponent, FooterComponent, ContactFormComponent, LandingPageComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RecapitulatioResumeModule { }
