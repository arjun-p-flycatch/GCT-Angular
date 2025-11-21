import {ChangeDetectionStrategy, Component ,EventEmitter, Input, Output} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-custom-date-range-picker',
  imports: [MatFormFieldModule, MatDatepickerModule ,MatInputModule],
  templateUrl: './custom-date-range-picker.html',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './custom-date-range-picker.css'
})
export class CustomDateRangePicker {
  @Input() startDate: Date | null = null;
  @Input() endDate: Date | null = null;
  @Input() placeholder: string = 'Enter a date range';
  @Output() dateRangeChange = new EventEmitter<{startDate: Date | null, endDate: Date | null}>();

  onStartDateChange(event: any) {
  this.startDate = event.value;
  this.dateRangeChange.emit({
    startDate: this.startDate,
    endDate: this.endDate
  });
}

onEndDateChange(event: any) {
  this.endDate = event.value;
  this.dateRangeChange.emit({
    startDate: this.startDate,
    endDate: this.endDate
  });
}
}
