import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SuccecPageComponent } from './succec-page/succec-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroductionComponent },
  { path: 'connect', component: ConnectionComponent },
  { path: 'success', component: SuccecPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
