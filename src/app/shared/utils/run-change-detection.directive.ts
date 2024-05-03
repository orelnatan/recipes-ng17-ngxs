import { ChangeDetectorRef, Directive, HostListener } from "@angular/core";

@Directive({
  selector: '[runChangeDetection]',
})
export class RunChangeDetectionDirective {
  @HostListener("click") onclick(): void {
    this.changeDetectorRef.detectChanges();
  }

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}
}