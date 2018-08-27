import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { HomeComponent } from '../component/home/home.component';
import { PagenotfoundComponent } from '../component/pagenotfound/pagenotfound.component';
import { AlwaysAuthGuard } from '../guard/always-auth-guard';
const MAINMENU_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { state: 'login' } },
  { path: 'home', component: HomeComponent, data: { state: 'home' }, canActivate: [AlwaysAuthGuard] },
  { path: '404', component: PagenotfoundComponent, data: { state: 'home' } },
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES, { useHash: true });
