import { Routes } from "@angular/router";
import { TrainingListComponent } from "./training-list.component";
export const TrainingRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "trainingList" },
  { path: "trainingList", component: TrainingListComponent }
];
