import { ButtonSize, ButtonTheme } from '@@components/Button/types';
import { TypographyTheme } from '@@components/Typography/types';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    button: {
      size: Record<ButtonSize, string>;
      theme: Record<ButtonTheme, string>;
    };
    typography: Record<TypographyTheme, string>;
    color: {
      defualtFontColor: string;
      main_050: string;
      main_400: string;
      main_700: string;
    };
  }
}