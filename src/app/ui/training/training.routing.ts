import { Routes } from "@angular/router";
import { TrainingListComponent } from "./training-list.component";
import { AddTrainingComponent } from "./add-training/add-training.component";
export const TrainingRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "trainingList" },
  { path: "addTraining", component: AddTrainingComponent },
  { path: "trainingList", component: TrainingListComponent }
];
