import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDisableProblemeComponent } from './form-disable-probleme/form-disable-probleme.component';
import { FormDisableSolutionComponent } from './form-disable-solution/form-disable-solution.component';

@NgModule({
  declarations: [AppComponent, FormDisableProblemeComponent, FormDisableSolutionComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
