import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import { RightArrowIcon } from '@@components/SliderItem/icons';
import { SliderItemProps } from '@@components/SliderItem/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledSliderItem = styled(Flex.Vertical)<{ $imageHeight: number; $buttonColor: string }>`
  border: 1px solid ${COLORS.LINE};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  background: ${COLORS.WHITE_TEXT};
  background-size: cover;

  .slider_item__image {
    height: ${({ $imageHeight }) => $imageHeight}px;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slider_item__content {
    padding: 16px 16px 20px;
  }

  .slider_item__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ $buttonColor }) => $buttonColor};
  }
`;

function SliderItem({
  image,
  imageHeight = 194,
  title,
  hiddenButton = true,
  buttonColor = COLORS.MAIN_GREEN,
  onClickButton,
  children,
}: SliderItemProps) {
  return (
    <StyledSliderItem gap={16} $imageHeight={imageHeight} $buttonColor={buttonColor}>
      <Flex.Horizontal className='slider_item__image'>
        <img src={image} alt={title} />
      </Flex.Horizontal>
      <Flex.Vertical gap={16} className='slider_item__content'>
        <Flex.Vertical gap={12}>
          <Typography.Header4>{title}</Typography.Header4>
          <Flex.Horizontal>{children}</Flex.Horizontal>
        </Flex.Vertical>
        {!hiddenButton && (
          <Button.Small className='slider_item__button' onClick={onClickButton}>
            <RightArrowIcon />
          </Button.Small>
        )}
      </Flex.Vertical>
    </StyledSliderItem>
  );
}

export default SliderItem;
