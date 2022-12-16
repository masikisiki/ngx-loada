import { NgModule } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { LoaderComponent } from './loader.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    LoaderComponent,
    OverlayModule
  ]
})
export class OverlayLoaderModule { }
