import styled from 'styled-components';

import Flex from '@@components/Flex';
import TextField from '@@components/InputFormGroup/parts/TextField';
import { InputFormGroupProps } from '@@components/InputFormGroup/types';
import Typography from '@@components/Typography';

const StyledInputFormGroup = styled(Flex.Vertical)``;

function InputFormGroup({ label, inputProps, ...props }: InputFormGroupProps) {
  return (
    <StyledInputFormGroup gap={2} {...props}>
      <Typography.Caption>{label}</Typography.Caption>
      <TextField {...inputProps} />
    </StyledInputFormGroup>
  );
}

export default InputFormGroup;
