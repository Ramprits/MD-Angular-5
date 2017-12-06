import { Routes } from "@angular/router";
import { CategoryComponent } from "./category.component";

export const CategoryRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "categoryList" },
  { path: "categoryList", component: CategoryComponent }
];
