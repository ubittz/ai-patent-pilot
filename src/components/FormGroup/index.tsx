import styled from 'styled-components';

import Flex from '@@components/Flex';
import { FormGroupProps } from '@@components/FormGroup/types';
import Typography from '@@components/Typography';

const StyledFormGroup = styled(Flex.Vertical)`
  .input_form_group__input_wrap {
    & > input {
      flex: 1;
    }

    & > button {
      flex: 0 0 auto;
      padding: 0 19.5px;
    }
  }
`;

function FormGroup({ label, children, ...props }: FormGroupProps) {
  return (
    <StyledFormGroup gap={2} {...props}>
      {label && <Typography.Header6>{label}</Typography.Header6>}
      {children}
    </StyledFormGroup>
  );
}

export default FormGroup;
