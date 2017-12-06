import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./ui/home/home.component";
import { NotFoundComponent } from "./ui/notfound.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  {
    path: "training",
    loadChildren: "app/ui/training/training.module#TrainingModule"
  },
  {
    path: "category",
    loadChildren: "app/ui/category/category.module#CategoryModule"
  },
  { path: "**", pathMatch: "full", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
