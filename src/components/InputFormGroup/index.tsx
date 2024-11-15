import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import TextField from '@@components/InputFormGroup/parts/TextField';
import { InputFormGroupProps } from '@@components/InputFormGroup/types';
import Typography from '@@components/Typography';

const StyledInputFormGroup = styled(Flex.Vertical)`
  .input_form_group__input_wrap {
    & > input {
      // 이상하게 안드로이드 삼성 브라우저에서 flex: 1 속성이 안 먹음;;;;;;;;;;;;;
      width: 100%;
    }

    & > button {
      flex: 0 0 auto;
      padding: 0 19px;
    }
  }
`;

function InputFormGroup({ label, inputProps, buttonProps, ...props }: InputFormGroupProps) {
  return (
    <StyledInputFormGroup gap={2} {...props}>
      {label && <Typography.Header6>{label}</Typography.Header6>}
      <Flex.Horizontal className='input_form_group__input_wrap' gap={14}>
        <TextField {...inputProps} />
        {buttonProps && <Button.Medium {...buttonProps} />}
      </Flex.Horizontal>
    </StyledInputFormGroup>
  );
}

export default InputFormGroup;
