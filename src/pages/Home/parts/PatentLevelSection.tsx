import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import PattentLevelImage from '@@pages/Home/images/patent_level.jpeg';

const StyledPatentLevelSection = styled(Flex.Vertical)`
  margin-top: 60px;

  .patent_level__image {
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

    & > .patent_level__button {
      width: 100%;
    }
  }
`;

function PatentLevelSection() {
  return (
    <StyledPatentLevelSection gap={16}>
      <Flex.Vertical className='tw-px-[30px]' gap={4}>
        <Typography.Header3>나의 특허 기술 레벨 측정</Typography.Header3>
        <Typography.Header6>나의 특허 아이디어의 레벨을 측정해보세요.</Typography.Header6>
      </Flex.Vertical>
      <Flex.Horizontal className='patent_level__image' alignItems='flex-end'>
        <img src={PattentLevelImage} alt='Patent Level Image' />
        <Button.Large className='patent_level__button'>측정하러 가기</Button.Large>
      </Flex.Horizontal>
    </StyledPatentLevelSection>
  );
}

export default PatentLevelSection;
