import { Component } from "@angular/core";

@Component({
    selector: 'app-loader',
    template: `
        <div class="loader"  [ngClass]="hideLoader ?  'hide-loader':''"></div>
    `,
    styleUrls: ['loader.component.scss']
})
export class LoaderComponent {
    hideLoader = false;
}