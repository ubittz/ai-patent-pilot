import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import { NavigationItemType } from '@@components/NavigationBar/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledNavigationItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  -webkit-tap-highlight-color: transparent;

  &:active,
  &:visited {
    background: #fff;
  }

  .navigation_item__icon {
    width: 30px;
    height: 30px;
  }
`;

function NavigationItem({ item }: { item: NavigationItemType }) {
  return (
    <StyledNavigationItem to={item.path} className='navigation_item'>
      {({ isActive }) => (
        <>
          <Flex.Horizontal justifyContent='center' alignItems='center' className='navigation_item__icon'>
            {isActive ? item.activeIcon : item.inactiveIcon}
          </Flex.Horizontal>
          <Typography.Header6 color={isActive ? COLORS.MAIN_TEXT : COLORS.PLACEHOLDER}>{item.title}</Typography.Header6>
        </>
      )}
    </StyledNavigationItem>
  );
}

export default NavigationItem;
