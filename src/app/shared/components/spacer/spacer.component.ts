import { Component, Input } from '@angular/core';

@Component({
  selector: 'spacer',
  standalone: true,
  templateUrl: './spacer.component.html',
})
export class SpacerComponent {
  @Input() space: number;
}
