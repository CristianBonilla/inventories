import { Event, NavigationEnd } from '@angular/router';

const APP_ROUTES = {
  AUTH: {
    MAIN: '/auth'
  },
  HOME: {
    MAIN: '/home',
    INVENTORIES: {
      MAIN: '/home/inventories'
    },
    SHOPPING: {
      MAIN: '/home/shopping'
    },
    SALES: {
      MAIN: '/home/sales'
    },
    USERS: '/home/users',
    ARTICLES: '/home/articles'
  }
} as const;

export interface SidebarRoutes {
  AUTH: string;
  HOME: string;
  INVENTORIES: string;
  SHOPPING: string;
  SALES: string;
  USERS: string;
  ARTICLES: string;
  [route: string]: string;
}

function sidebarRoutes(currentRoutes: any) {
  return Object.keys(currentRoutes).reduce((routes, key) => {
    const route = currentRoutes[key];
    if (typeof route === 'string') {
      routes[key] = route;
    } else {
      const { MAIN, ...otherRoutes } = route;
      routes[key] = MAIN;
      routes = { ...routes, ...sidebarRoutes(otherRoutes) };
    }

    return routes;
  }, { } as SidebarRoutes);
}

const SIDEBAR_ROUTES = sidebarRoutes(APP_ROUTES);

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
