import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';

const StyledMain = styled(FullScreen)`
  .body {
    padding: 0 30px;

    .main__top {
      flex: 1;
      gap: 12px;
    }

    .main__bottom {
      flex: 1;

      .main__button_wrap {
        display: flex;
      }
    }
  }
`;

function Main() {
  return (
    <StyledMain>
      <Header hiddenBack>AI 특허 파일럿</Header>
      <Flex.Vertical className='body'>
        <Flex.Horizontal className='main__top' alignItems='center' gap={12}>
          <Typography.LargeTitle className='main__title'>
            아이디어의 가치를
            <br />
            높이세요.
          </Typography.LargeTitle>
        </Flex.Horizontal>
        <Flex.Vertical className='main__bottom'>
          <Flex.Vertical className='main__button_wrap' gap={12}>
            <Button.Large>로그인</Button.Large>
            <Button.Large theme='secondary'>회원가입</Button.Large>
          </Flex.Vertical>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledMain>
  );
}

export default Main;
