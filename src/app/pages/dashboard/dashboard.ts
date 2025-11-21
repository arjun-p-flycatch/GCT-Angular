import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDateRangePicker } from '../../shared/components/common-components/custom-date-range-picker/custom-date-range-picker/custom-date-range-picker';
import { DashboardHeadings } from '../../shared/components/dashboard/dashboard-heading-card/dashboard-heading-card';
import { BookingSummaryCard } from '../../shared/components/dashboard/booking-summary-card/booking-summary-card';
import { PaymentSummaryCard } from '../../shared/components/dashboard/payment-summary-card/payment-summary-card';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    CustomDateRangePicker,
    DashboardHeadings,
    BookingSummaryCard,
    PaymentSummaryCard,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  startDate: Date | null = null;
  endDate: Date | null = null;

  onDateRangeChange(dateRange: { startDate: Date | null; endDate: Date | null }) {
    this.startDate = dateRange.startDate;
    this.endDate = dateRange.endDate;
    console.log('Date range selected:', this.startDate, this.endDate);
  }
  dashBoardBookingCardDetails = computed(() => [
    {
      headingText: 'Completed',
      subHeading: 'From Booking Summary',
      bg: 'linear-gradient(138.32deg, #8ABB8F 3.31%, #F0F7FF 86.34%)',
      count: 100,
      countBg: 'linear-gradient(92.43deg, #FFFFFF -26.05%, #6FA875 71.77%)',
      icon: '/icons/calender-white.svg',
      iconBg: '#6FA875',
    },
    {
      headingText: 'Pending',
      subHeading: 'From Booking Summary',
      bg: 'linear-gradient(138.32deg, #FF8F6B 3.31%, #F0F7FF 86.34%)',
      count: 102,
      countBg: 'linear-gradient(92.43deg, #FFFFFF -26.05%, #FF8F6B 71.77%)',
      icon: '/icons/calender-white.svg',
      iconBg: '#FF8F6B',
    },
    {
      headingText: 'Cancelled',
      subHeading: 'From Booking Summary',
      bg: 'linear-gradient(138.32deg, #F01F35 3.31%, #F0F7FF 86.34%)',
      count: 102,
      countBg: 'linear-gradient(92.43deg, #FFFFFF -26.05%, #F01F35 71.77%)',
      icon: '/icons/calender-white.svg',
      iconBg: '#F01F35',
    },
  ]);
  dashBoardPaymentCardDetails = computed(() => [
    {
      headingText: 'Received',
      subHeading: 'From Payment Summary',
      bg: 'linear-gradient(138.32deg, #6359E9 3.31%, #FCFCFC 86.34%)',
      Amount: 100,
      countBg: 'linear-gradient(180deg, rgba(99, 89, 233, 0.2) 0%, #6359E9 100%)',
      icon: '/icons/rupee.svg',
      iconBg: '#6359E9',
      indicatorBg: 'linear-gradient(360deg, #6359E9 0%, rgba(99, 89, 233, 0.2) 100%)',
      secondaryIcon: '/icons/wallet.svg',
    },
    {
      headingText: 'Pending',
      subHeading: 'From Payment Summary',
      bg: 'linear-gradient(138.32deg, #327E8C 3.31%, #FCFCFC 86.34%)',
      Amount: 200,
      countBg: 'linear-gradient(180deg, rgba(50, 126, 140, 0.2) 0%, #327E8C 100%)',
      icon: '/icons/rupee.svg',
      iconBg: '#327E8C',
      indicatorBg: 'linear-gradient(360deg, #327E8C 0%, rgba(50, 126, 140, 0.2) 100%)',
      secondaryIcon: '/icons/wallet.svg',
    },
    {
      headingText: 'Refunded',
      subHeading: 'From Payment Summary',
      bg: 'linear-gradient(138.32deg, #CE8E0F 3.31%, #FCFCFC 86.34%)',
      Amount: 300,
      countBg: 'linear-gradient(180deg, rgba(206, 142, 15, 0.2) 0%, #CE8E0F 100%)',
      icon: '/icons/rupee.svg',
      iconBg: '#CE8E0F',
      indicatorBg: 'linear-gradient(360deg, #CE8E0F 0%, rgba(206, 142, 15, 0.2) 100%)',
      secondaryIcon: '/icons/wallet.svg',
    },
  ]);
}
