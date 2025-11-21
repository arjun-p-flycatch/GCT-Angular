import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeadingCard } from './dashboard-heading-card';

describe('DashboardHeadingCard', () => {
  let component: DashboardHeadingCard;
  let fixture: ComponentFixture<DashboardHeadingCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHeadingCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHeadingCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
