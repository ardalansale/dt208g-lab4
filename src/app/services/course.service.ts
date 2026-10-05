import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    private url: string = 'https://webbutveckling.miun.se/files/ramschema.json';

    constructor(private http: HttpClient) {}

    getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
    }
}