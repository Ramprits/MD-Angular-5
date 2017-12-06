import { Component, OnInit } from "@angular/core";
import { CotegoryService } from "./category.service";
import { Title } from "@angular/platform-browser";
import { ICategory, Category } from "./category.model";
import { TrackerError } from "../../shared/tracker.error";

@Component({
  templateUrl: "category.component.html"
})
export class CategoryComponent implements OnInit {
  categories: ICategory[] | TrackerError;
  category: Category = new PrimeCategory();
  constructor(
    private categoriesService: CotegoryService,
    private title: Title
  ) {
    this.title.setTitle("Categories");
    this.GetCategories();
  }

  ngOnInit() {}
  GetCategories() {
    this.categoriesService
      .getCategories()
      .subscribe((category: ICategory[]) => {
        this.categories = category;
      });
  }
  onRowSelect(event) {
    // tslint:disable-next-line:no-console
    console.log(event);
  }
}

class PrimeCategory implements Category {
  constructor(
    public categoryId?,
    public name?,
    public description?,
    public imageUrl?,
    public isActive?
  ) {}
}
