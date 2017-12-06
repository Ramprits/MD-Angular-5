import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoryComponent } from "./category.component";
import { RouterModule } from "@angular/router";
import { CategoryRoutes } from "./category.routing";
import { PanelModule, DataGridModule } from "primeng/primeng";
import { CotegoryService } from "./category.service";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CategoryRoutes),
    PanelModule,
    DataGridModule,
    HttpClientModule
  ],
  declarations: [CategoryComponent],
  providers: [CotegoryService]
})
export class CategoryModule {}
