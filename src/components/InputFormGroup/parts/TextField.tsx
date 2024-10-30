import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const TextField = styled.input`
  height: 42px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_300};

  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;

  color: ${COLORS.GRAY_SCALE_800};

  &::placeholder {
    color: ${COLORS.GRAY_SCALE_500};
  }
`;

export default TextField;
