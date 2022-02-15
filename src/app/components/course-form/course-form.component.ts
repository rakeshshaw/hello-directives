import { Component, OnInit } from "@angular/core";

@Component({
  selector: "course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.css"],
})
export class CourseFormComponent implements OnInit {
  categories = [
    { id: 1, value: "Development" },
    { id: 2, value: "Art" },
    { id: 3, value: "Language" },
  ];

  constructor() {}

  ngOnInit() {}

  submit(f) {
    console.log(f);
  }
}
