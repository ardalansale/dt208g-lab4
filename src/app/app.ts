import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from './models/course.model';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  title = 'lab4';
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  filterText: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = data;
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
      }
    });
  }

  applyFilter(): void {
    const search = this.filterText.toLowerCase().trim();
    this.filteredCourses = this.courses.filter(course =>
      course.code.toLowerCase().includes(search) ||
      course.coursename.toLowerCase().includes(search)
    );
  }
}