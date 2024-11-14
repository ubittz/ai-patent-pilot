import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { PatenSectiontProps } from '@@components/PatentSection/types';
import Typography from '@@components/Typography';

const StyledPatentSection = styled(Flex.Vertical)`
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

function PatentSection({ title, description, image, buttonProps }: PatenSectiontProps) {
  return (
    <StyledPatentSection gap={16}>
      <Flex.Vertical className='tw-px-[30px]' gap={4}>
        <Typography.Header3>{title}</Typography.Header3>
        <Typography.Header6>{description}</Typography.Header6>
      </Flex.Vertical>
      <Flex.Horizontal className='patent_level__image' alignItems='flex-end'>
        <img src={image} alt='Patent Level Image' />
        <Button.Large className='patent_level__button' {...buttonProps} />
      </Flex.Horizontal>
    </StyledPatentSection>
  );
}

export default PatentSection;
