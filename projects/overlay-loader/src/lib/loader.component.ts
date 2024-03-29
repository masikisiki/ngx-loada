import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-loader',
  templateUrl:'loader.component.html' ,
  styleUrls: ['loader.component.scss']
})
export class LoaderComponent {
  @Input() showLoader = true;
  @Input() message: string| null = "Processing your request..."
}
