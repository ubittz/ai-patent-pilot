import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { DownArrowPointIcon } from '@@constants/icons';

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
  return (
    <StyledHome navigation>
      <Header hiddenBack>AI 특허 파일럿</Header>
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
        <PatentLevelSection />
        <NecessaryPatentSection />
        <FutureTechSection />
        <CopyRight />
      </Flex.Vertical>
    </StyledHome>
  );
}

export default Home;
