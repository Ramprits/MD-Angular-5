import { Injectable, ErrorHandler } from "@angular/core";
import { TrackerError } from "app/shared/tracker.error";

@Injectable()
export class TrackerErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    const customError: TrackerError = new TrackerError();
    customError.errorNumber = 200;
    customError.message = (<Error>error).message;
    customError.friendlyMessage = "An error occurred. Please try again.";

    console.log(customError);
  }

  constructor() {}
}
