import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDateRangePicker } from './custom-date-range-picker';

describe('CustomDateRangePicker', () => {
  let component: CustomDateRangePicker;
  let fixture: ComponentFixture<CustomDateRangePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDateRangePicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDateRangePicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
