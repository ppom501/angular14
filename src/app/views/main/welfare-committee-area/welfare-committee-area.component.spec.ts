import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareCommitteeAreaComponent } from './welfare-committee-area.component';

describe('WelfareCommitteeAreaComponent', () => {
  let component: WelfareCommitteeAreaComponent;
  let fixture: ComponentFixture<WelfareCommitteeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelfareCommitteeAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelfareCommitteeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
