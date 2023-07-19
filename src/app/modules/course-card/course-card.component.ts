import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { Course } from "src/app/model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  @Input() course: Course; // Utilizar o required no Input, faz com que se esse Input não for passado, dá erro de compilação
  @Input() cardIndex: number;
  @Input() noImageTpl: TemplateRef<any>;

  @Output("courseSelected") courseEmitter = new EventEmitter<Course>(); // Adicionando o "courseSelected dentro do Output, eu estou dizendo que no component pai, eu posso receber com esse nome, ao invés de courseEmitter"

  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }
}
