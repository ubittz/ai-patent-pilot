import styled from 'styled-components';

import { ButtonProps, ButtonSize, ButtonTheme } from '@@components/Button/types';

const StyledBasicButton = styled.button<{ $size: ButtonSize; $theme: ButtonTheme }>`
  outline: none;
  border-radius: 100px;
  ${({ theme, $size }) => theme.button.size[$size]}
  ${({ theme, $theme }) => theme.button.theme[$theme]}
  
  &:disabled {
    opacity: 0.6;
  }
`;

const BasicButton =
  (size: ButtonSize) =>
  ({ theme = 'primary', ...props }: ButtonProps) => {
    return <StyledBasicButton {...props} $size={size} $theme={theme} />;
  };

export default BasicButton;
