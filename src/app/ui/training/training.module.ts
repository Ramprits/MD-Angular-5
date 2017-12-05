import { NgModule } from "@angular/core";
import { TrainingListComponent } from "./training-list.component";
import { RouterModule } from "@angular/router";
import { TrainingRoutes } from "./training.routing";
import { HttpClientModule } from "@angular/common/http";
import {
  InputTextModule,
  DataTableModule,
  PanelModule,
  GrowlModule,
  ButtonModule,
  CheckboxModule,
  DataGridModule
} from "primeng/primeng";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    RouterModule.forChild(TrainingRoutes),
    InputTextModule,
    PanelModule,
    CheckboxModule,
    GrowlModule,
    DataGridModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTableModule
  ],
  exports: [],
  declarations: [TrainingListComponent],
  providers: []
})
export class TrainingModule {}
