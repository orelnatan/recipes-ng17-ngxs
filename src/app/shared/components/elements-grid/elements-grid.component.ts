import { Component, Input } from '@angular/core';

@Component({
  selector: 'elements-grid',
  standalone: true,
  templateUrl: './elements-grid.component.html',
  styleUrls: ['./elements-grid.component.scss'],
})
export class ElementsGridComponent {   
  @Input() elementMinSizePx: number;
}
