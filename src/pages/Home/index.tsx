import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';

const StyledHome = styled(FullScreen)``;

function Home() {
  return (
    <StyledHome navigation>
      <Header hiddenBack>AI 특허 파일럿</Header>
      <Flex.Vertical className='body'></Flex.Vertical>
    </StyledHome>
  );
}

export default Home;
