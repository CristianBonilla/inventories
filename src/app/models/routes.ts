import { Event, NavigationEnd } from '@angular/router';

const APP_ROUTES = {
  HOME: {
    MAIN: 'home',
    INVENTORIES: {
      MAIN: 'home/inventories'
    },
    SHOPPING: {
      MAIN: 'home/shopping'
    },
    SALES: {
      MAIN: 'home/sales'
    }
  }
} as const;

type RouteKeys = keyof typeof ROUTES;

const { HOME: ROUTES } = APP_ROUTES;

type HomeRoutes = {
  [K in RouteKeys]: string;
};

const SIDEBAR_ROUTES = Object.keys(ROUTES).reduce<HomeRoutes>((routes, key) => {
  const route = ROUTES[key as RouteKeys];
  routes[key as RouteKeys] = typeof route === 'object' ? route.MAIN : route;

  return routes;
}, { } as HomeRoutes);

Object.freeze(APP_ROUTES);
Object.freeze(SIDEBAR_ROUTES);

const sidebarRouteValues = Object.values(SIDEBAR_ROUTES);

function routeFromSidebar(event: Event) {
  return event instanceof NavigationEnd && sidebarRouteValues.some(route => route === event.url);
}

export {
  APP_ROUTES,
  SIDEBAR_ROUTES,
  routeFromSidebar
};
