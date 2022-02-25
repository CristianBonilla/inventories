import { AfterViewInit, Directive } from '@angular/core';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-ngx';
import OverlayScrollbars from 'overlayscrollbars';

@Directive({
  selector: '[miCollapseSidebar]'
})
export class CollapseSidebarDirective implements AfterViewInit {
  constructor(private overlayScrollbars: OverlayScrollbarsComponent) { }

  ngAfterViewInit() {
    const overlayScrollbars = this.overlayScrollbars.osInstance();
    const $overlayScrollbars = this.overlayScrollbars.osTarget();
    if (!!overlayScrollbars && !!$overlayScrollbars) {
      this.updateScrollbar(overlayScrollbars, $overlayScrollbars);
    }
  }

  private updateScrollbar(
    overlayScrollbars: OverlayScrollbars,
    $overlayScrollbars: HTMLDivElement
  ) {
    const collapses = [
      ...$overlayScrollbars.querySelectorAll<HTMLDivElement>('.collapse')
    ];
    collapses.forEach($collapse => {
      const $parent = $collapse.parentElement;
      const $this = $($collapse);
      let collapseInterval: NodeJS.Timeout;
      $this.on({
        'show.bs.collapse': () => {
          $parent?.classList.add('active');
          this.hideCollapses(collapses);
        },
        'hide.bs.collapse': () => {
          $parent?.classList.remove('active');
        },
        'show.bs.collapse hide.bs.collapse': () => {
          collapseInterval = setInterval(() => overlayScrollbars.update(true), 10);
        },
        'shown.bs.collapse hidden.bs.collapse': () => {
          clearInterval(collapseInterval);
        }
      });
    });
  }

  private hideCollapses(collapses: HTMLDivElement[]) {
    collapses.filter($collapseShown => $collapseShown.classList.contains('show'))
      .map($collapseShown => $($collapseShown))
      .forEach($collapseShown => $collapseShown.collapse('hide'));
  }
}
