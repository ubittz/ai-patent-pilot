import styled from 'styled-components';

import { RadioProps } from '@@components/Radio/types';
import { COLORS } from '@@constants/colors';

const StyledRadio = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  .radio__icon {
    position: relative;

    width: 20px;
    height: 20px;

    background: ${COLORS.WHITE_TEXT};
    border: 1px solid ${COLORS.LINE};
    border-radius: 50%;

    &::before {
      display: none;
    }
  }

  & > input:checked + .radio__icon {
    background: ${COLORS.SUB_GREEN};
    border: none;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;

      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${COLORS.WHITE_TEXT};

      transform: translateX(-50%) translateY(-50%);
    }
  }
`;

function Radio({ children, ...props }: RadioProps) {
  return (
    <StyledRadio>
      <input type='radio' hidden {...props} />
      <div className='radio__icon' />
      {children}
    </StyledRadio>
  );
}

export default Radio;
