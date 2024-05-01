import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { RecipesState } from '@recipes/recipes/state';

@NgModule({
  imports: [
    MatSnackBarModule,
    NgxsModule.forRoot([RecipesState], {
      developmentMode: false
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ]
})
export class AppStateModule {}


