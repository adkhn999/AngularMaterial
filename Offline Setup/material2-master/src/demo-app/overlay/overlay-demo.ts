import {
    Component,
    ElementRef,
    ViewChildren,
    QueryList,
    ViewEncapsulation,
    Directive,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {Overlay, OverlayState, OVERLAY_PROVIDERS} from '@angular2-material/core/overlay/overlay';
import {ComponentPortal, Portal} from '@angular2-material/core/portal/portal';
import {TemplatePortalDirective} from '@angular2-material/core/portal/portal-directives';



@Directive({selector: '[overlay-origin]'})
class OverlayOrigin {
  constructor(public elementRef: ElementRef) { }
}


@Component({
  moduleId: module.id,
  selector: 'overlay-demo',
  templateUrl: 'overlay-demo.html',
  styleUrls: ['overlay-demo.css'],
  directives: [TemplatePortalDirective, OverlayOrigin],
  providers: [OVERLAY_PROVIDERS],
  encapsulation: ViewEncapsulation.None,
})
export class OverlayDemo {
  nextPosition: number = 0;

  @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;
  @ViewChild(OverlayOrigin) private _overlayOrigin: OverlayOrigin;

  constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef) { }

  openRotiniPanel() {
    let config = new OverlayState();

    config.positionStrategy = this.overlay.position()
        .global()
        .left(`${this.nextPosition}px`)
        .top(`${this.nextPosition}px`);

    this.nextPosition += 30;

    this.overlay.create(config).then(ref => {
      ref.attach(new ComponentPortal(RotiniPanel, this.viewContainerRef));
    });
  }

  openFusilliPanel() {
    let config = new OverlayState();

    config.positionStrategy = this.overlay.position()
        .global()
        .centerHorizontally()
        .top(`${this.nextPosition}px`);

    this.nextPosition += 30;

    this.overlay.create(config).then(ref => {
      ref.attach(this.templatePortals.first);
    });
  }

  openSpaghettiPanel() {
    // TODO(jelbourn): separate overlay demo for connected positioning.
    let strategy = this.overlay.position()
        .connectedTo(
            this._overlayOrigin.elementRef,
            {originX: 'start', originY: 'bottom'},
            {overlayX: 'start', overlayY: 'top'} );

    let config = new OverlayState();
    config.positionStrategy = strategy;

    this.overlay.create(config).then(ref => {
      ref.attach(new ComponentPortal(SpagettiPanel, this.viewContainerRef));
    });
  }
}

/** Simple component to load into an overlay */
@Component({
  moduleId: module.id,
  selector: 'rotini-panel',
  template: '<p class="demo-rotini">Rotini {{value}}</p>'
})
class RotiniPanel {
  value: number = 9000;
}

/** Simple component to load into an overlay */
@Component({
  selector: 'spagetti-panel',
  template: '<div class="demo-spagetti">Spagetti {{value}}</div>'
})
class SpagettiPanel {
  value: string = 'Omega';
}
