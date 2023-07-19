import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import * as e from "express";
import { CourseCardComponent } from "./modules/course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;

  @ViewChild("cardRef") card: CourseCardComponent;

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  oncCourseSelected(event: Course) {
    console.log(event);
  }

  onCoursesEdited() {
    this.courses.push({
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "INTERMEDIATE",
      lessonsCount: 10,
    });
  }
}
