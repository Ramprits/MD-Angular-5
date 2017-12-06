import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact/contact.component";
import { PanelModule } from "primeng/primeng";
import { RouterModule } from "@angular/router";
import { ContactRoutes } from "./contact.routing";

@NgModule({
  imports: [CommonModule, PanelModule, RouterModule.forChild(ContactRoutes)],
  declarations: [ContactComponent]
})
export class ContactModule {}
