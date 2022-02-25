import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SIDEBAR_ROUTES } from '@models/routes';
import { DEFAULT_SCROLLBAR_OPTIONS, ScrollbarOptions } from '@models/scrollbar';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-ngx';
import OverlayScrollbars from 'overlayscrollbars';

@Component({
  selector: 'mi-sidebar-wrapper',
  templateUrl: './sidebar-wrapper.component.html',
  styles: []
})
export class SidebarWrapperComponent implements AfterViewInit {
  @ViewChild(OverlayScrollbarsComponent)
  readonly overlayScrollbarsRef!: OverlayScrollbarsComponent;

  readonly scrollbarOptions: ScrollbarOptions = {
    ...DEFAULT_SCROLLBAR_OPTIONS,
    overflowBehavior: {
      x: 'visible-hidden'
    }
  };
  readonly ROUTES = SIDEBAR_ROUTES;

  ngAfterViewInit() {
    const overlayScrollbars = this.overlayScrollbarsRef.osInstance();
    const $overlayScrollbars = this.overlayScrollbarsRef.osTarget();
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
    collapses.filter($shown => $shown.classList.contains('show'))
      .map($shown => $($shown))
      .forEach($shown => $shown.collapse('hide'));
  }
}
