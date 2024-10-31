import { DefaultTheme } from 'styled-components';

import { BUTTON_SIZE, BUTTON_THEME } from '@@components/Button/constants';
import { FLEX_DIRECTION } from '@@components/Flex/constants';
import { TYPOGRAPHY_THEME } from '@@components/Typography/constants';
import { COLORS } from '@@constants/colors';

export const theme: DefaultTheme = {
  flex: {
    direction: {
      [FLEX_DIRECTION.HORIZONTAL]: 'row',
      [FLEX_DIRECTION.VERTICAL]: 'column',
    },
  },
  button: {
    size: {
      [BUTTON_SIZE.LARGE]: 'height: 48px;',
      [BUTTON_SIZE.MEDIUM]: 'height: 42px;',
      [BUTTON_SIZE.SMALL]: 'height: 40px;',
      [BUTTON_SIZE.TINY]: 'height: 34px;',
    },
    theme: {
      [BUTTON_THEME.PRIMARY]: `background: ${COLORS.MAIN_GREEN}; border: none; color: ${COLORS.WHITE_TEXT};`,
      [BUTTON_THEME.OUTLINE]: `background: ${COLORS.WHITE_TEXT}; border: 1px solid ${COLORS.MAIN_GREEN}; color: ${COLORS.MAIN_GREEN};`,
    },
  },
  typography: {
    [TYPOGRAPHY_THEME.HEADER_1]: 'font-size: 26px; font-weight: 700; line-height: 33.8px;',
    [TYPOGRAPHY_THEME.HEADER_2]: 'font-size: 22px; font-weight: 700; line-height: 28.6px;',
    [TYPOGRAPHY_THEME.HEADER_3]: 'font-size: 18px; font-weight: 700; line-height: 23.4px;',
    [TYPOGRAPHY_THEME.HEADER_4]: 'font-size: 16px; font-weight: 700; line-height: 20.8px;',
    [TYPOGRAPHY_THEME.HEADER_5]: 'font-size: 14px; font-weight: 700; line-height: 18.2px;',
    [TYPOGRAPHY_THEME.HEADER_6]: 'font-size: 12px; font-weight: 400; line-height: 15.6px;',
  },
  color: {
    defualtFontColor: COLORS.MAIN_TEXT,
    main_text: COLORS.MAIN_TEXT,
    main_green: COLORS.MAIN_GREEN,
    white_text: COLORS.WHITE_TEXT,
    sub_text: COLORS.SUB_TEXT,
    sub_green: COLORS.SUB_GREEN,
    placeholder: COLORS.PLACEHOLDER,
    line: COLORS.LINE,
  },
};
