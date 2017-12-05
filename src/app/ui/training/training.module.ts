import { NgModule } from "@angular/core";
import { TrainingListComponent } from "./training-list.component";
import { RouterModule } from "@angular/router";
import { TrainingRoutes } from "./training.routing";

@NgModule({
  imports: [RouterModule.forChild(TrainingRoutes)],
  exports: [],
  declarations: [TrainingListComponent],
  providers: []
})
export class TrainingModule {}
