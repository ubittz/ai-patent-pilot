import styled from 'styled-components';

import { CheckBoxProps } from '@@components/CheckBox/types';
import Flex from '@@components/Flex';
import { CheckIcon } from '@@components/PatentCheckPage/icons';
import { COLORS } from '@@constants/colors';

const StyledPatentCheckBox = styled.label`
  .check_box {
    padding: 10px 12px 10px 8px;
    background: #f9f9f9;
    border-radius: 12px;
    border: 1px solid ${COLORS.LINE};

    .check_box__icon {
      flex: 0 0 auto;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: ${COLORS.LINE};
    }
  }

  input:checked + .check_box {
    background: ${COLORS.MAIN_GREEN};
    border-color: ${COLORS.MAIN_GREEN};

    color: ${COLORS.WHITE_TEXT};

    .check_box__icon {
      background: ${COLORS.WHITE_TEXT};
    }
  }
`;

function PatentCheckBox({ children, ...props }: CheckBoxProps) {
  return (
    <StyledPatentCheckBox>
      <input type='checkbox' {...props} hidden />
      <Flex.Horizontal className='check_box' gap={10} alignItems='flex-start'>
        <Flex.Horizontal className='check_box__icon' justifyContent='center' alignItems='center'>
          <CheckIcon isFill={!!props.checked} />
        </Flex.Horizontal>
        {children}
      </Flex.Horizontal>
    </StyledPatentCheckBox>
  );
}

export default PatentCheckBox;
