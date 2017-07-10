import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { FSIHeaderComponent } from './pages/header.component';
import { FSIMainComponent } from './pages/main.component';
import { FSIWhatComponent } from './pages/what.component';
import { FSIAboutComponent } from './pages/about.component';
import { FSIServicesComponent } from './pages/services.component';
import { FSIJoinComponent } from './pages/join.component';
import { FSIFooterComponent } from './pages/footer.component';

// Video Pages
import { FSIDrillsComponent } from './pages/video-pages/drills.component';
import { FSIEthicalComponent } from './pages/video-pages/ethical.component';
import { FSIRouteComponent } from './pages/video-pages/route.component';

@NgModule({
  declarations: [
    AppComponent,
    FSIHeaderComponent,
    FSIMainComponent,
    FSIWhatComponent,
    FSIAboutComponent,
    FSIServicesComponent,
    FSIJoinComponent,
    FSIFooterComponent,

    // Video Pages
    FSIDrillsComponent,
    FSIEthicalComponent,
    FSIRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
