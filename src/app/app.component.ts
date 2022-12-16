import { Component } from '@angular/core';
import { LoaderService } from 'projects/overlay-loader/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public loader: LoaderService) { }
}
