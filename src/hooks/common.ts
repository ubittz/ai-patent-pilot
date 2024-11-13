import { useState } from 'react';

import { RouteObject, useLocation, useRoutes } from 'react-router-dom';

export const useToggle = (initial: boolean = false) => {
  const [flag, setFlag] = useState<boolean>(initial);

  const toggle = () => {
    setFlag((prev) => !prev);
  };

  return [flag, toggle] as const;
};

export const useRouteStepper = (pages: RouteObject[]) => {
  const { pathname } = useLocation();
  const routes = useRoutes(pages);

  const index = pages.findIndex(({ path }) => path && pathname.includes(path));

  return {
    routes,
    gauge: ((index + 1) / pages.length) * 100,
    step: index + 1,
  } as const;
};
