import styled from 'styled-components';

import { CheckIcon } from '@@components/CheckBox/icons';
import { CheckBoxProps } from '@@components/CheckBox/types';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledCheckBox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  .checkbox__icon {
    position: relative;

    width: 20px;
    height: 20px;

    background: ${COLORS.LINE};
    border-radius: 4px;
  }

  & > input:checked + .checkbox__icon {
    background: ${COLORS.MAIN_GREEN};
  }
`;

function CheckBox({ children, ...props }: CheckBoxProps) {
  return (
    <StyledCheckBox>
      <input type='checkbox' hidden {...props} />
      <Flex.Horizontal className='checkbox__icon' alignItems='center' justifyContent='center'>
        <CheckIcon />
      </Flex.Horizontal>
      <Typography.Header4 fontWeight={400} color={COLORS.SUB_TEXT}>
        {children}
      </Typography.Header4>
    </StyledCheckBox>
  );
}

export default CheckBox;
