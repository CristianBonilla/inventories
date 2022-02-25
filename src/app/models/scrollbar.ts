export type ScrollbarOptions = OverlayScrollbars.Options;

export type ScrollbarHandler = (element: HTMLElement, overlay: OverlayScrollbars) => void;

export interface Scrollbar {
  options: ScrollbarOptions;
  handler: ScrollbarHandler;
}

export const DEFAULT_SCROLLBAR_OPTIONS: ScrollbarOptions = {
  overflowBehavior: {
    x: 'scroll',
    y: 'scroll'
  },
  resize: 'none',
  scrollbars: {
    autoHide: 'move'
  }
};
