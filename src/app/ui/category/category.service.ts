import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/delay";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ICategory } from "./category.model";
import { TrackerError } from "../../shared/tracker.error";

@Injectable()
export class CotegoryService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ICategory[] | TrackerError> {
    return this.httpClient
      .get<ICategory[]>(`http://localhost:5000/api/Categories`)
      .map((category: ICategory[]) => {
        return category;
      })
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse): Observable<TrackerError> {
    const dataError = new TrackerError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error occurred retrieving data.";
    return Observable.throw(dataError);
  }
}
