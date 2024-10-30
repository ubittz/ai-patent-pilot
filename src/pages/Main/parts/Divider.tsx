import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledDivider = styled(Flex.Horizontal)`
  padding-top: 3px;

  .divider__bar {
    flex: 1;
    height: 1px;
    background: ${COLORS.GRAY_SCALE_200};
  }

  .divider__text {
    flex: 0 0 auto;
  }
`;

function Divider() {
  return (
    <StyledDivider gap={8} alignItems='center'>
      <div className='divider__bar' />
      <Typography.SmallBody color={COLORS.GRAY_SCALE_600} className='divier__text'>
        또는
      </Typography.SmallBody>
      <div className='divider__bar' />
    </StyledDivider>
  );
}

export default Divider;
