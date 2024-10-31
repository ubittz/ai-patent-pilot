import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const TextField = styled.input`
  height: 42px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${COLORS.LINE};

  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: ${COLORS.MAIN_TEXT};

  &::placeholder {
    color: ${COLORS.PLACEHOLDER};
  }

  &:read-only {
    background: ${COLORS.LINE};
  }
`;

export default TextField;
