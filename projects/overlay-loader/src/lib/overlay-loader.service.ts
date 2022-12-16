import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { LoaderComponent } from './loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  overlayRef?: OverlayRef;
  portal?: ComponentPortal<LoaderComponent>;
  compRef?: ComponentRef<LoaderComponent>;

  constructor(private overlay: Overlay) { }

  public loading(): void {
    this.portal = new ComponentPortal(LoaderComponent);
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: false
    });
    this.compRef = this.overlayRef.attach(this.portal);

    setTimeout(() => {
      this.hideLoader()
    }, 3000);
  }

  public hideLoader(): void {
    if (this.overlayRef && this.portal && this.compRef) {
      this.compRef.instance.hideLoader = true;
      setTimeout(() => {
        this.overlayRef?.detach();
      }, 1000);
    }
  }
}
