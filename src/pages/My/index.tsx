import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import { BookIcon, CoinIcon, ProfileIcon, TicketIcon } from '@@pages/My/icons';
import MyInfoCard from '@@pages/My/parts/MyInfoCard';
import MyInfoConfigList from '@@pages/My/parts/MyInfoConfigList';
import { ConfigItem } from '@@pages/My/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledMy = styled(FullScreen)`
  .body {
  }
`;

const CONFIG_LIST: ConfigItem[] = [
  {
    title: '내 정보 수정',
    icon: <ProfileIcon />,
    path: pathGenerator(`${PAGES.MY}/update`),
  },
  {
    title: '서비스 이력 확인',
    icon: <BookIcon />,
    path: pathGenerator(`${PAGES.MY}/service-history`),
  },
  {
    title: '서비스 이용권 안내',
    icon: <TicketIcon />,
    path: pathGenerator(`${PAGES.MY}/ticket-history`),
  },
  {
    title: '결제 내역',
    icon: <CoinIcon />,
    path: pathGenerator(`${PAGES.MY}/purchase-history`),
  },
];

function My() {
  return (
    <StyledMy navigation>
      <Header />
      <Flex.Vertical className='body'>
        <MyInfoCard />
        <MyInfoConfigList itemList={CONFIG_LIST} />
      </Flex.Vertical>
    </StyledMy>
  );
}

export default My;
