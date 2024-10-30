import Flex from '@@components/Flex';
import { AppleIcon, GoogleIcon, KakaoIcon, NaverIcon } from '@@constants/icons';

function SNSLogin() {
  return (
    <Flex.Horizontal justifyContent='center' gap={20}>
      <NaverIcon />
      <KakaoIcon />
      <GoogleIcon />
      <AppleIcon />
    </Flex.Horizontal>
  );
}

export default SNSLogin;
