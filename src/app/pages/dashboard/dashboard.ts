import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDateRangePicker } from '../../shared/components/common-components/custom-date-range-picker/custom-date-range-picker/custom-date-range-picker';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, CustomDateRangePicker],
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
}
