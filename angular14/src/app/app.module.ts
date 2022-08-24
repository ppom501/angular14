import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './views/header/header.component';
import {NavComponent} from './views/nav/nav.component';
import {SidenavComponent} from './views/sidenav/sidenav.component';
import {FooterComponent} from './views/footer/footer.component';
import {MainComponent} from './views/main/main.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedMaterialModuleModule} from "./shared/shared-material-module/shared-material-module.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CommodityShoppingComponent} from './views/main/commodity-shopping/commodity-shopping.component';
import {EventRegistrationComponent} from './views/main/event-registration/event-registration.component';
import {ServiceAppointmentComponent} from './views/main/service-appointment/service-appointment.component';
import {WelfareCommitteeAreaComponent} from './views/main/welfare-committee-area/welfare-committee-area.component';
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SidenavComponent,
    FooterComponent,
    MainComponent,
    CommodityShoppingComponent,
    EventRegistrationComponent,
    ServiceAppointmentComponent,
    WelfareCommitteeAreaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedMaterialModuleModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
