import BaseTypography from '@@components/Typography/BaseTypography';
import { TYPOGRAPHY_THEME } from '@@components/Typography/constants';

const Typography = {
  [TYPOGRAPHY_THEME.HEADER_1]: BaseTypography(TYPOGRAPHY_THEME.HEADER_1),
  [TYPOGRAPHY_THEME.HEADER_2]: BaseTypography(TYPOGRAPHY_THEME.HEADER_2),
  [TYPOGRAPHY_THEME.HEADER_3]: BaseTypography(TYPOGRAPHY_THEME.HEADER_3),
  [TYPOGRAPHY_THEME.HEADER_4]: BaseTypography(TYPOGRAPHY_THEME.HEADER_4),
  [TYPOGRAPHY_THEME.HEADER_5]: BaseTypography(TYPOGRAPHY_THEME.HEADER_5),
  [TYPOGRAPHY_THEME.HEADER_6]: BaseTypography(TYPOGRAPHY_THEME.HEADER_6),
  [TYPOGRAPHY_THEME.HEADER_7]: BaseTypography(TYPOGRAPHY_THEME.HEADER_7),
};

export default Typography;
