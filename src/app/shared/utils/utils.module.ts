import { NgModule } from '@angular/core';

import { RunChangeDetectionDirective } from './run-change-detection.directive';
import { AbstractToFormControlPipe } from './abstract-to-form-control.pipe';

@NgModule({
  declarations: [ 
    RunChangeDetectionDirective,
    AbstractToFormControlPipe
  ],
  exports: [
    RunChangeDetectionDirective,
    AbstractToFormControlPipe
  ]
})
export class UtilsModule {}