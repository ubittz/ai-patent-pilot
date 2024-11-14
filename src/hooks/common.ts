import { useEffect, useState } from 'react';

import { RouteObject, useLocation, useNavigate, useRoutes } from 'react-router-dom';

import { pathGenerator } from '@@router/utils';

export const useToggle = (initial: boolean = false) => {
  const [flag, setFlag] = useState<boolean>(initial);

  const toggle = () => {
    setFlag((prev) => !prev);
  };

  return [flag, toggle] as const;
};

export const useRouteStepper = (pages: RouteObject[], basePath: string = '') => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const routes = useRoutes(pages);

  const index = pages.findIndex(({ path }) => path && pathname.includes(`${basePath}${path}`));

  useEffect(() => {
    if (index === -1) {
      navigate(pathGenerator(`${basePath}${pages[0].path}`), { replace: true });
    }
  }, [pathname]);

  return {
    routes,
    gauge: ((index + 1) / (pages.length + 1)) * 100,
    currentStep: index,
  } as const;
};
