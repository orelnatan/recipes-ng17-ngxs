import { NgModule } from '@angular/core';

import { RunChangeDetectionDirective } from './run-change-detection.directive';
import { AbstractToFormControlPipe } from './abstract-to-form-control.pipe';
import { EnumToListPipe } from './enum-to-list.pipe';

@NgModule({
  declarations: [ 
    RunChangeDetectionDirective,
    AbstractToFormControlPipe,
    EnumToListPipe,
  ],
  exports: [
    RunChangeDetectionDirective,
    AbstractToFormControlPipe,
    EnumToListPipe,
  ]
})
export class UtilsModule {}