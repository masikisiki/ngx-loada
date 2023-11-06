import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { LoaderComponent } from './loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private overlayRef?: OverlayRef;

  constructor(private overlay: Overlay) { }

  public loading(timeout: number = 59000 + 31000): void {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
        hasBackdrop: false
      });

      const spinnerPortal = new ComponentPortal(LoaderComponent);
      this.overlayRef.attach(spinnerPortal);

      setTimeout(() => {
        this.hideLoader();
      }, timeout);
    }
  }

  public hideLoader(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = undefined;
    }
  }
}
