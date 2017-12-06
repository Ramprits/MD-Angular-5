import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
@Component({
  templateUrl: "./add-training.component.html"
})
export class AddTrainingComponent implements OnInit {
  AddTraining: FormGroup;

  constructor(private fb: FormBuilder, private title: Title) {
    this.title.setTitle("New Training");
  }
  ngOnInit() {
    this.BuildTrainingForm();
  }

  private BuildTrainingForm() {
    this.AddTraining = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      isActive: false,
      isFree: false,
      startDate: ["", []],
      averageCost: [],
      concernedPublic: ["", []],
      educationalObjectives: ["", []],
      othersEducationalObjectives: ["", []],
      durationInDays: 0,
      location: ["", []],
      externalLinks: ["", []],
      language: ["EN", []],
      isApproved: true,
      isCPF: false,
      businessUnitId: ["", []],
      modalityId: ["", [Validators.required]],
      organizationId: ["", [Validators.required]],
      categoryId: ["", [Validators.required]],
      createdDate: ["", []]
    });
  }
  onSubmit(formData) {
    // tslint:disable-next-line:no-console
    console.log(formData);
  }
}
