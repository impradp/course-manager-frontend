import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Course } from '../../../core/models/course.model';
import { CourseService } from '../../../core/services/course.service';


@Component({
  selector: 'app-course-detail',
  standalone: true,
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
  imports: [CommonModule]
})
export default class CourseDetailComponent implements OnInit {
  course$: Observable<Course | undefined>;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.course$ = this.route.paramMap.pipe(
      switchMap(params => {
        const courseId = Number(params.get('id'));
        return this.courseService.getCourseById(courseId);
      })
    );
  }

  ngOnInit(): void {}
}