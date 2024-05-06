import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'inputs-container',
  templateUrl: './inputs-container.component.html',
  styleUrls: [`./inputs-container.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputsContainerComponent {
  @Input() gap: number;

  @Input({ transform: booleanAttribute }) between: boolean;
  @Input({ transform: booleanAttribute }) around: boolean;
  @Input({ transform: booleanAttribute }) evenly: boolean;
}