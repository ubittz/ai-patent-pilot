import styled from 'styled-components';

import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';

const StyledMain = styled(FullScreen)``;

function Main() {
  return (
    <StyledMain>
      <Header hiddenBack>AI 특허 파일럿</Header>
      <div className='body'></div>
    </StyledMain>
  );
}

export default Main;
