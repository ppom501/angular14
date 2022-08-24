import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityShoppingComponent } from './commodity-shopping.component';

describe('CommodityShoppingComponent', () => {
  let component: CommodityShoppingComponent;
  let fixture: ComponentFixture<CommodityShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityShoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommodityShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
