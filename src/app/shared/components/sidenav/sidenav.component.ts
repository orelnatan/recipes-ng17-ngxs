import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { RecipesState } from '@recipes/recipes/state';
import { RedirectModule } from '@recipes/shared/redirect';

@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    RedirectModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  @Select(RecipesState.sidenav) sidenav$: Observable<boolean>;  
  @Select(RecipesState.loading) loading$: Observable<boolean>;
}
