import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AppRoles } from '../app.roles';
import { appCanActivate } from './guard/app.auth.guard';
import { NoAccessComponent } from './pages/no-access/no-access.component';
import { ArtistsComponent } from './pages/artists/artists.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, data: { title: 'Home' } },
  {
    path: 'artists',
    component: ArtistsComponent,
    canActivate: [appCanActivate],
    data: {
      roles: [AppRoles.Admin, AppRoles.Staff, AppRoles.User],
      title: 'Artists',
    },
  },
  {
    path: 'noaccess',
    component: NoAccessComponent,
    data: { title: 'No Access' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
