export const ROUTE_PREFIX = import.meta.env.VITE_APP_ROUTE_PREFIX;

export const PAGES = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  HOME: '/home',
  RECOMMEND_SERVICE: '/recommend-service',
  FUTURE_TECH: '/future-tech',
  MY: '/my',
  CHECK_LEVEL: '/check-level',
  FIND_PATENT: '/find-patent',
  CUSTOM_PATENT: '/custom-patent',
} as const;
