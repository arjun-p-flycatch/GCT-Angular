import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-heading-card',
  imports: [],
  templateUrl: './dashboard-heading-card.html',
  styleUrl: './dashboard-heading-card.css'
})
export class DashboardHeadings {
bg = input.required<string>()
iconBg = input.required<string>()
textColor = input.required<string>()
icon = input.required<string>()
heading = input.required<string>()  
}