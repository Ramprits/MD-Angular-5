import { Component, OnInit } from "@angular/core";
import { GetTraining } from "./training.model";
import { TrackerError } from "../../shared/tracker.error";
import { TrainingService } from "./training.service";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  templateUrl: "training-list.component.html"
})
export class TrainingListComponent implements OnInit {
  trainings: GetTraining[] | TrackerError;
  loading = false;
  checked = false;
  isFree = false;
  constructor(
    private trainingService: TrainingService,
    private title: Title,
    private router: Router
  ) {
    this.title.setTitle("Training List");
  }

  ngOnInit() {
    try {
      this.GetTrainings();
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }
  GetTrainings() {
    this.loading = true;
    this.trainingService.GetTrainings().subscribe(
      training => {
        this.trainings = training;
      },
      // tslint:disable-next-line:no-console
      (err: TrackerError) => console.log(err.errorNumber),
      () => (this.loading = false)
    );
  }

  addTraining() {
    this.router.navigate(["/training/addTraining"]);
  }
}
