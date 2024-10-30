import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import Divider from '@@pages/Main/parts/Divider';
import SNSLogin from '@@pages/Main/parts/SNSLogin';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledMain = styled(FullScreen)`
  .body {
    padding: 0 30px;
  }
`;

function Main() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(pathGenerator(PAGES.LOGIN));
  };

  const handleClickRegister = () => {
    navigate(pathGenerator(PAGES.REGISTER));
  };

  return (
    <StyledMain>
      <Header hiddenBack>AI 특허 파일럿</Header>
      <Flex.Vertical className='body'>
        <Flex.Horizontal className='main__top' flex={1} alignItems='center' gap={12}>
          <Typography.LargeTitle className='main__title'>
            아이디어의 가치를
            <br />
            높이세요.
          </Typography.LargeTitle>
        </Flex.Horizontal>
        <Flex.Vertical className='main__bottom' flex={1} gap={17}>
          <Flex.Vertical className='main__button_wrap' gap={12}>
            <Button.Large onClick={handleClickLogin}>로그인</Button.Large>
            <Button.Large theme='secondary' onClick={handleClickRegister}>
              회원가입
            </Button.Large>
          </Flex.Vertical>
          <Divider />
          <SNSLogin />
          <Flex.Horizontal className='main__forgot_password' flex={1} alignItems='center'>
            <Typography.SmallBody color={COLORS.GRAY_SCALE_500}>
              ID/PW를 잃어버리셨나요? <Typography.SmallBody as='span'>ID/PW 찾기</Typography.SmallBody>
            </Typography.SmallBody>
          </Flex.Horizontal>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledMain>
  );
}

export default Main;
