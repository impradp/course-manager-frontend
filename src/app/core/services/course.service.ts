import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesSubject = new BehaviorSubject<Course[]>([
    {
      id: 1,
      name: 'Introduction to Computer Science',
      description: 'Fundamental concepts of computer science',
      instructor: 'Dr. Jane Smith',
      duration: '6 weeks',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      name: 'Web Development Fundamentals',
      description: 'Learn modern web development techniques',
      instructor: 'John Doe',
      duration: '8 weeks',
      difficulty: 'Intermediate'
    },
    // Add more courses...
  ]);

  getCourses(): Observable<Course[]> {
    return this.coursesSubject.asObservable();
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return of(this.coursesSubject.value.find(course => course.id === id));
  }
}