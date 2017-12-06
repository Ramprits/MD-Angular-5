import { Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";

export const ContactRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "contact" },
  { path: "contact", component: ContactComponent }
];
