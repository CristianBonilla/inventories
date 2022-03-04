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
    USERS: {
      MAIN: '/home/users',
      USERS_CREATE: '/home/users/create',
      USERS_UPDATE: '/home/users/update',
      USERS_DELETE: '/home/users/delete',
      USERS_DETAILS: '/home/users/details'
    },
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
  USERS_CREATE: string;
  USERS_UPDATE: string;
  USERS_DELETE: string;
  USERS_DETAILS: string;
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
