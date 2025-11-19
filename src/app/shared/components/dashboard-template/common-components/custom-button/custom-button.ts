import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-custom-button',
  standalone : true,
  imports : [CommonModule , MatButtonModule , MatProgressSpinnerModule ,MatIconModule],
  templateUrl: './custom-button.html',
  styleUrls: ['./custom-button.css']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() icon?: string;
  @Input() color: 'primary' | 'secondary'  = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
}

