import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./app/views/header/header.component";
import {EventRegistrationComponent} from "./app/views/main/event-registration/event-registration.component";
import {ServiceAppointmentComponent} from "./app/views/main/service-appointment/service-appointment.component";
import {CommodityShoppingComponent} from "./app/views/main/commodity-shopping/commodity-shopping.component";
import {WelfareCommitteeAreaComponent} from "./app/views/main/welfare-committee-area/welfare-committee-area.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'header1', component: HeaderComponent },
  { path: 'serviceappointment', component: ServiceAppointmentComponent },//服務預約
  { path: 'eventregistration', component: EventRegistrationComponent },//活動報名
  { path: 'commodityshopping', component: CommodityShoppingComponent },//商品購物
  { path: 'welfarecommitteearea', component: WelfareCommitteeAreaComponent },//福委專區


];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
