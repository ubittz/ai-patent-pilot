import { ButtonSize, ButtonTheme } from '@@components/Button/types';
import { FlexDirection } from '@@components/Flex/types';
import { TypographyTheme } from '@@components/Typography/types';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    flex: {
      direction: Record<FlexDirection, string>;
    };
    button: {
      size: Record<ButtonSize, string>;
      theme: Record<ButtonTheme, string>;
    };
    typography: Record<TypographyTheme, string>;
    color: {
      defualtFontColor: string;
      main_text: string;
      main_green: string;
      white_text: string;
      sub_text: string;
      sub_green: string;
      placeholder: string;
      line: string;
    };
  }
}
