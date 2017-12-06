import { NgModule } from "@angular/core";
import { TrainingListComponent } from "./training-list.component";
import { RouterModule } from "@angular/router";
import { TrainingRoutes } from "./training.routing";
import { HttpClientModule } from "@angular/common/http";
import { PanelModule, DataTableModule } from "primeng/primeng";
import { ReactiveFormsModule } from "@angular/forms";
import { TrainingService } from "./training.service";
@NgModule({
  imports: [
    RouterModule.forChild(TrainingRoutes),
    PanelModule,
    DataTableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [TrainingListComponent],
  providers: [TrainingService]
})
export class TrainingModule {}
