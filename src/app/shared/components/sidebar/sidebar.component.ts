import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Course {
  id: string;
  title: string;
  isApproved: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  courses: Course[] = [
    { id: '1', title: 'Introduction to Programming', isApproved: true },
    { id: '2', title: 'Web Development Basics', isApproved: false },
    { id: '3', title: 'Machine Learning Fundamentals', isApproved: true },
  ];

  constructor() {}

  ngOnInit() {}
}
