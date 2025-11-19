import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef, signal, input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  imports : [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './custom-input.html',
  styleUrls: ['./custom-input.css'], 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() type: 'text' | 'password' = 'text';
  @Input() suffixIcon?: string;
  @Input() error?:string = '';
  @Output() suffixClick = new EventEmitter<void>();

  value: string = '';
  disabled = false;
   control = new FormControl('');

  ngOnInit() {
    if (this.error) this.control.setErrors({ custom: true });
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }
  onBlur(): void {
    this.onTouched();
  }

  handleSuffixClick() {
    this.suffixClick.emit();
  }
}
