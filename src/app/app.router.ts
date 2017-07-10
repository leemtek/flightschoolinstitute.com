import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FSIDrillsComponent } from './pages/video-pages/drills.component';
import { FSIEthicalComponent } from './pages/video-pages/ethical.component';
import { FSIRouteComponent } from './pages/video-pages/route.component';

export const router: Routes = [
    { path: 'drills', component: FSIDrillsComponent },
    { path: 'ethical', component: FSIEthicalComponent },
    { path: 'route', component: FSIRouteComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);