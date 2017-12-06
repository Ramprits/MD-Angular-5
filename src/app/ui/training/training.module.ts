import { NgModule } from "@angular/core";
import { TrainingListComponent } from "./training-list.component";
import { RouterModule } from "@angular/router";
import { TrainingRoutes } from "./training.routing";
import { HttpClientModule } from "@angular/common/http";
import { PanelModule, DataTableModule, InputTextModule } from "primeng/primeng";
import { ReactiveFormsModule } from "@angular/forms";
import { TrainingService } from "./training.service";
import { AddTrainingComponent } from "./add-training/add-training.component";
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TrainingRoutes),
    PanelModule,
    InputTextModule,
    DataTableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [TrainingListComponent, AddTrainingComponent],
  providers: [TrainingService]
})
export class TrainingModule {}
