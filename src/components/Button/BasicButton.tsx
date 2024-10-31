import styled from 'styled-components';

import { ButtonProps, ButtonSize, ButtonTheme } from '@@components/Button/types';
import Typography from '@@components/Typography';

const StyledBasicButton = styled.button<{ $size: ButtonSize; $theme: ButtonTheme }>`
  outline: none;
  border-radius: 100px;
  ${({ theme, $size }) => theme.button.size[$size]}
  ${({ theme, $theme }) => theme.button.theme[$theme]}
  
  .button__text {
    color: inherit;
  }

  &:disabled {
    opacity: 0.6;
  }
`;

const BasicButton =
  (size: ButtonSize) =>
  ({ theme = 'primary', children, ...props }: ButtonProps) => {
    return (
      <StyledBasicButton {...props} $size={size} $theme={theme}>
        <Typography.Header5 className='button__text'>{children}</Typography.Header5>
      </StyledBasicButton>
    );
  };

export default BasicButton;
