import { NgModule } from '@angular/core';
import { RunChangeDetectionDirective } from './run-change-detection.directive';
;

@NgModule({
  declarations: [ 
    RunChangeDetectionDirective
  ],
  exports: [
    RunChangeDetectionDirective
  ]
})
export class AccessoriesModule {}