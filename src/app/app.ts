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

  // Sorteringstillstånd
  sortColumn: keyof Course = 'code';
  sortAscending: boolean = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = data;
        this.sortCourses('code'); // Standardsortera på kurskod
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
    this.sortCourses(this.sortColumn, false); // Behåll sorteringen på det filtrerade resultatet
  }

  sortCourses(column: keyof Course, toggle: boolean = true): void {
    if (toggle) {
      if (this.sortColumn === column) {
        this.sortAscending = !this.sortAscending;
      } else {
        this.sortColumn = column;
        this.sortAscending = true;
      }
    }

    this.filteredCourses.sort((a, b) => {
      const valA = (a[column] || '').toString().toLowerCase();
      const valB = (b[column] || '').toString().toLowerCase();

      if (valA < valB) return this.sortAscending ? -1 : 1;
      if (valA > valB) return this.sortAscending ? 1 : -1;
      return 0;
    });
  }
}