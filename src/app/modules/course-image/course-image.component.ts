import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "course-image",
  templateUrl: "./course-image.component.html",
  styleUrls: ["./course-image.component.css"],
})
export class CourseImageComponent implements OnInit {
  @Input("src") imageUrl: string; // Basicamente estou recebendo ele como [src] no input que passo na instancia que chamo dele no component pai

  constructor() {}

  ngOnInit(): void {}
}
