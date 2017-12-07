import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { LoggerService } from "./logger.service";
import { PlaneLoggerServiceService } from "./plainlogger.service";

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [LoggerService, PlaneLoggerServiceService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
