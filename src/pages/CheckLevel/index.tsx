import { RouteObject, useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import StepPage from '@@components/StepPage';
import { useRouteStepper } from '@@hooks/common';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function CheckLevel() {
  const naviate = useNavigate();

  const ROUTES: RouteObject[] = [];

  const { routes, gauge, step } = useRouteStepper(ROUTES);

  const handleClickNext = () => {
    naviate(pathGenerator(`${PAGES.CHECK_LEVEL}${ROUTES[step].path}`));
  };

  return (
    <StepPage
      title='기술 레벨 측정'
      gauge={gauge}
      buttonProps={{
        onClick: handleClickNext,
      }}
    >
      {routes}
    </StepPage>
  );
}

export default CheckLevel;
