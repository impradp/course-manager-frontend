import { Component } from '@angular/core';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';
import { CourseListComponent } from '../courses/course-list/course-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [
    CourseListComponent, 
    NavbarComponent, 
    SidebarComponent
  ]
})
export class DashboardComponent {
}