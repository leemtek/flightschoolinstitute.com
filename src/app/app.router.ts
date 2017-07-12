import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FSIDrillsComponent } from './pages/video-pages/drills.component';
import { FSIEthicalComponent } from './pages/video-pages/ethical.component';
import { FSIRouteComponent } from './pages/video-pages/route.component';
import { HomeComponent } from './home.component';
import { SignupComponent } from './auth/signup/signup.component'
import { SigninComponent } from './auth/signin/signin.component'

export const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'drills', component: FSIDrillsComponent },
    { path: 'ethical', component: FSIEthicalComponent },
    { path: 'route', component: FSIRouteComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);