import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { GrayScaleLogoIcon } from '@@pages/Home/icons';

const StyledCopyRight = styled(Flex.Vertical)`
  margin-top: 80px;
  background: #eaeaea;
  padding: 20px 30px;
`;

const StyledTypography = styled(Typography.Header7)`
  color: ${COLORS.SUB_TEXT};
`;

function CopyRight() {
  return (
    <StyledCopyRight gap={10}>
      <GrayScaleLogoIcon />
      <Flex.Vertical gap={24}>
        <Flex.Vertical gap={6}>
          <Flex.Horizontal>
            <StyledTypography className='tw-w-[70px]'>주식회사 웅빈</StyledTypography>
            <StyledTypography>| 대표이사 권도훈</StyledTypography>
          </Flex.Horizontal>
          <Flex.Horizontal>
            <StyledTypography className='tw-w-[70px]'>사업자등록번호</StyledTypography>
            <StyledTypography>| 000-0000-00</StyledTypography>
          </Flex.Horizontal>
          <Flex.Horizontal>
            <StyledTypography className='tw-w-[70px]'>주소</StyledTypography>
            <StyledTypography>| 대전 광역시 서구</StyledTypography>
          </Flex.Horizontal>
        </Flex.Vertical>
        <Flex.Vertical gap={6}>
          <Flex.Horizontal>
            <StyledTypography className='tw-w-[40px]'>고객센터</StyledTypography>
            <StyledTypography>| 010-7278-0055</StyledTypography>
          </Flex.Horizontal>
          <Flex.Horizontal>
            <StyledTypography className='tw-w-[40px]'>이용안내</StyledTypography>
            <StyledTypography>| 월~금 09:00 ~ 18:00</StyledTypography>
          </Flex.Horizontal>
          <Flex.Horizontal>
            <StyledTypography className='tw-w-[40px]'>이메일</StyledTypography>
            <StyledTypography>| kipo0318@naver.com</StyledTypography>
          </Flex.Horizontal>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledCopyRight>
  );
}

export default CopyRight;
