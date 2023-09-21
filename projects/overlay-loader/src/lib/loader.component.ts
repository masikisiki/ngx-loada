import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader" [ngClass]="showLoader ? 'show-loader' : 'hide-loader'"> </div>
  `,
  styleUrls: ['loader.component.scss']
})
export class LoaderComponent {
  @Input() showLoader = true;
}
