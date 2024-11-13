import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import FutureTechImage from '@@pages/Home/images/future_tech.jpeg';

const StyledFutureTechSection = styled(Flex.Vertical)`
  margin-top: 60px;
  .future_tech__image {
    padding: 20px 30px;
    position: relative;
    height: 250px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);

    & > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }

    & > .future_tech__button {
      width: 100%;
    }
  }
`;

function FutureTechSection() {
  return (
    <StyledFutureTechSection gap={16}>
      <Flex.Vertical className='tw-px-[30px]' gap={4}>
        <Typography.Header3>AI 특허 파일럿이 제공하는 서비스입니다.</Typography.Header3>
        <Typography.Header6>AI 특허 파일럿과 함께 미래 기술을 확인하세요.</Typography.Header6>
      </Flex.Vertical>
      <Flex.Horizontal className='future_tech__image' alignItems='flex-end'>
        <img src={FutureTechImage} alt='Future Tech Image' />
        <Button.Large className='future_tech__button'>미래기술 둘러보기</Button.Large>
      </Flex.Horizontal>
    </StyledFutureTechSection>
  );
}

export default FutureTechSection;
