import styled from 'styled-components';

import Flex from '@@components/Flex';
import {
  ActiveHomeIcon,
  ActiveMyInfoIcon,
  ActiveRecommendIcon,
  ActiveTechIcon,
  InactiveHomeIcon,
  InactiveMyInfoIcon,
  InactiveRecommendIcon,
  InactiveTechIcon,
} from '@@components/NavigationBar/icons';
import NavigationItem from '@@components/NavigationBar/parts/NavigationItem';
import { NavigationItemType } from '@@components/NavigationBar/types';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledNavigationBar = styled(Flex.Horizontal)`
  height: 66px;
  border-top: 1px solid ${COLORS.LINE};

  .navigation_item {
    flex: 1;
  }
`;

const NAVIGATION_LIST: NavigationItemType[] = [
  {
    title: '홈',
    path: pathGenerator(PAGES.HOME),
    activeIcon: <ActiveHomeIcon />,
    inactiveIcon: <InactiveHomeIcon />,
  },
  {
    title: '추천 서비스',
    path: pathGenerator(PAGES.RECOMMEND_SERVICE),
    activeIcon: <ActiveRecommendIcon />,
    inactiveIcon: <InactiveRecommendIcon />,
  },
  {
    title: '미래기술',
    path: pathGenerator(PAGES.FUTURE_TECH),
    activeIcon: <ActiveTechIcon />,
    inactiveIcon: <InactiveTechIcon />,
  },
  {
    title: '내 정보',
    path: pathGenerator(PAGES.MY),
    activeIcon: <ActiveMyInfoIcon />,
    inactiveIcon: <InactiveMyInfoIcon />,
  },
];

function NavigationBar() {
  return (
    <StyledNavigationBar>
      {NAVIGATION_LIST.map((item) => (
        <NavigationItem key={item.title} item={item} />
      ))}
    </StyledNavigationBar>
  );
}

export default NavigationBar;
