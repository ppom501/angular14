import {Component, OnInit} from '@angular/core';
import {ServiceAppointmentComponent} from "../main/service-appointment/service-appointment.component";
import {EventRegistrationComponent} from "../main/event-registration/event-registration.component";
import {CommodityShoppingComponent} from "../main/commodity-shopping/commodity-shopping.component";
import {WelfareCommitteeAreaComponent} from "../main/welfare-committee-area/welfare-committee-area.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuList = [
    {name: '商品購物', link: '/commodityshopping'},
    {name: '活動報名', link: '/eventregistration'},
    {name: '服務預約', link: '/serviceappointment'},
    {name: '福委專區', link: '/welfarecommitteearea'},


  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
