import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import "rxjs/add/operator/delay";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/delay";
import { TrackerError } from "../../shared/tracker.error";
import { GetTraining } from "./training.model";

@Injectable()
export class TrainingService {
  constructor(private httpClient: HttpClient) {}
  GetTrainings(): Observable<GetTraining[] | TrackerError> {
    return this.httpClient
      .get<GetTraining[] | TrackerError>(`http://localhost:5000/api/trainings`)
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
