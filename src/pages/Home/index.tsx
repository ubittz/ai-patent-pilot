import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { DownArrowPointIcon, HeaderLogo } from '@@constants/icons';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { asType } from '@@types/common';

import CopyRight from './parts/CopyRight';
import FutureTechSection from './parts/FutureTechSection';
import NecessaryPatentSection from './parts/NecessaryPatentSection';
import PatentLevelSection from './parts/PatentLevelSection';
import PatentListSection from './parts/PatentListSection';

const StyledHome = styled(FullScreen)`
  .body {
    padding-top: 40px;
    overflow-x: hidden;
  }
`;

function Home() {
  const navigate = useNavigate();

  const [popupState, setPopupState] = useState<{
    visible: boolean;
    page?: asType<typeof PAGES>;
  }>({
    visible: false,
  });

  const handleClickButton = (page: asType<typeof PAGES>) => {
    setPopupState({
      visible: true,
      page,
    });
  };

  const handleConfirm = () => {
    if (popupState.page) {
      navigate(pathGenerator(popupState.page));
    }
  };

  return (
    <StyledHome navigation>
      <Popup visible={popupState.visible} onConfirm={handleConfirm}>
        서비스 이용권을 사용하시겠습니까?
      </Popup>
      <Header hiddenBack>
        <HeaderLogo />
      </Header>
      <Flex.Vertical className='body'>
        <Flex.Vertical className='tw-px-[30px]' gap={24}>
          <Typography.Header2>
            AI 특허 파일럿의
            <br />
            <Typography.Header2 color={COLORS.MAIN_GREEN} as='span'>
              특별한 서비스
            </Typography.Header2>
            를 경험해보세요.
          </Typography.Header2>
          <DownArrowPointIcon />
        </Flex.Vertical>
        <PatentListSection />
        <PatentLevelSection onClickButton={handleClickButton} />
        <NecessaryPatentSection onClickButton={handleClickButton} />
        <FutureTechSection />
        <CopyRight />
      </Flex.Vertical>
    </StyledHome>
  );
}

export default Home;
