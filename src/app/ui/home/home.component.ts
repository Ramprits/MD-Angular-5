import { Component, OnInit, VERSION } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "mdb-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(private title: Title) {
    this.title.setTitle(`Home-${VERSION.full}`);
  }

  ngOnInit() {}
}
