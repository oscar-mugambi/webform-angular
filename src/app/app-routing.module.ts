import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDrivenComponent } from './user-driven-form/user-driven-form.component';
import { AutoPopupComponent } from './auto-popup/auto-popup.component';
import { WithFormComponent } from './with-form/with-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'user-driven', component: UserDrivenComponent },
  { path: 'auto-popup', component: AutoPopupComponent },
  { path: 'with-form', component: WithFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
