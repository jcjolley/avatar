import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { WizardStep }   from '../wizard/wizard-step';
import { Wizard }   from '../wizard/wizard';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, WizardStep, Wizard ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
