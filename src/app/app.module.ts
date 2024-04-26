import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserDrivenComponent } from './user-driven-form/user-driven-form.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AutoPopupComponent } from './auto-popup/auto-popup.component';
import { WithFormComponent } from './with-form/with-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDrivenComponent,
    LandingPageComponent,
    AutoPopupComponent,
    WithFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
